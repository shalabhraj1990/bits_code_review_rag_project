import os,re
from langchain_openai import OpenAIEmbeddings
from langchain_ollama import OllamaEmbeddings
from langchain_community.document_loaders import TextLoader,PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter,CharacterTextSplitter
from pinecone import Pinecone,ServerlessSpec

PINECONE_API_KEY = "pcsk_6WFJeD_81Ygvt8kLMpEtY5F7mjRaAekL3L17mfFjHse9TD1j4GdXxJNqk7Z6dssKqEWaaU"
PINECONE_ENV = ""
# PINECONE_INDEX_NAME = "flowise"
PINECONE_INDEX_NAME = "kb-vericode-nomic-plain-index"

#file path
DIRECTORY_PATH = "S:\\Shalabh_Private\\BITS\\Semester\\semester-4\\project\\git"
OUTPUT_FILE = "S:\\Shalabh_Private\\BITS\\Semester\\semester-4\\project\\git\\output.txt"

# Initialize  embeddings
embedding_model = OllamaEmbeddings(
    model="nomic-embed-text",
)

#vectorizing the chunks
# Initialize Pinecone

pc = Pinecone(
    api_key=PINECONE_API_KEY
)
if PINECONE_INDEX_NAME not in pc.list_indexes().names():
    spec = ServerlessSpec(cloud='aws', region='us-east-1')
    pc.create_index(PINECONE_INDEX_NAME, dimension=768, metric="cosine",spec=spec)
index = pc.Index(PINECONE_INDEX_NAME)


# Function to process and store document
def process_and_store_document(doc_text, chunk_size=500, chunk_overlap=50):
    # Split document into chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size, chunk_overlap=chunk_overlap
    )
    chunks = text_splitter.split_text(doc_text)

    # Generate embeddings and store in Pinecone
    for i, chunk in enumerate(chunks):
        embedding = embedding_model.embed_query(chunk)
        index.upsert([(f"doc_chunk_{i}", embedding, {"text": chunk})])

    print(f"Stored {len(chunks)} chunks in Pinecone.")


def process_and_save_in_file(doc_text, chunk_size=100, chunk_overlap=10):
    # Split document into chunks
    text_splitter = RecursiveCharacterTextSplitter(
        #separators=["\n", " "]
        chunk_size=chunk_size, chunk_overlap=chunk_overlap, separators=["|||"]
    )
    chunks = text_splitter.split_text(doc_text)

    # Open the file in append mode
    with open('embeddings.txt', 'a') as f:
        # Generate embeddings and store in Pinecone and file
        for i, chunk in enumerate(chunks):
            embedding = embedding_model.embed_query(chunk)
            # Write the embedding and chunk text to the file
            f.write(f"Chunk {i}:\n")
            f.write(f"Text: {chunk}\n")
            f.write(f"Embedding: {embedding}\n\n")

def read_all_files_from_directory(directory_path, output_file):
    all_files = []
    valid_extensions = {'.java', '.py', '.js'}
    with open(output_file, 'w') as outfile:
        for root, dirs, files in os.walk(directory_path):
            for file in files:
                if os.path.splitext(file)[1] in valid_extensions:
                    file_path = os.path.join(root, file)
                    all_files.append(file_path)
                    with open(file_path, 'r') as infile:
                        content = infile.read()
                        #outfile.write(f"File: {file_path}\n")
                        outfile.write(content)
                        outfile.write("\n\n")
    return all_files


def return_all_content_from_files(directory_path, output_file):
    all_files = []
    valid_extensions = {'.java', '.py', '.js'}
    with open(output_file, 'w') as outfile:
        for root, dirs, files in os.walk(directory_path):
            for file in files:
                if os.path.splitext(file)[1] in valid_extensions:
                    file_path = os.path.join(root, file)
                    all_files.append(file_path)
                    with open(file_path, 'r') as infile:
                        content = infile.read()
                        #outfile.write(f"File: {file_path}\n")
                        outfile.write(content)
                        outfile.write("\n\n")
    with open(output_file, 'r') as outfile:
        output_content = outfile.read()

    return output_content


def orchestrate_processing(directory_path,
                           output_file=OUTPUT_FILE):
    # Get all content from files
    all_content = return_all_content_from_files(directory_path, output_file)
    # text-preprocessing
    #all_content = re.sub(r'\W+', '', all_content)
    # print(all_content)
    # Process and store the document content
    process_and_store_document(all_content)


# Example usage
directory_path = DIRECTORY_PATH
orchestrate_processing(directory_path)


# # Example usage
# textdocument = TextLoader('5_product-data.txt').load()
#
# if textdocument and textdocument.__len__() > 0 and textdocument[0].page_content is not None:
#     process_and_store_document(textdocument[0].page_content)
# # Print the content of the PDF file

#PDF document
# pdf_document = PyPDFLoader('Admission_Offer.pdf').load()
# for page in pdf_document:
#     process_and_store_document(page.page_content)

# files = read_all_files_from_directory("S:\Shalabh_Private\BITS\Semester\semester-4\project\git")
# print('Files count ', len(files))
# for file in files:
#     print(file)

# files = return_read_all_files_from_directory("S:\Shalabh_Private\BITS\Semester\semester-4\project\git")
# print(files)