class SourceDocument:
    def __init__(self, pageContent: str, metadata: dict, id: str):
        self.pageContent = pageContent
        self.metadata = metadata
        self.id = id

    def to_dict(self):
        return {
            "pageContent": self.pageContent,
            "metadata": self.metadata,
            "id": self.id
        }
