create database vericodedb;
use vericodedb;
show tables;

select * from vericode_app_llmmodels;
select * from vericode_app_summarizellmmodels;
-- LLM Models
INSERT INTO vericode_app_summarizellmmodels (model_name, model_url)     
VALUES  
    ('llama3', 'http://localhost:3000/api/v1/prediction/5f7fe4a6-8eda-4e6a-83b1-c15415057040'),
    ('mistral', 'http://localhost:3000/api/v1/prediction/fb0b4555-9e6f-4e05-8048-3cbc2e70c880'),
    ('gemma2', 'http://localhost:3000/api/v1/prediction/ad9ac8ac-3ac3-4ca9-89c3-5ce339a0969f'),
    ('deepseek-r1', 'http://localhost:3000/api/v1/prediction/6fa60e6b-72e7-421d-83b6-f2d44fe0fd39');


-- Code Models
INSERT INTO vericode_app_llmmodels (model_name, model_url)  
VALUES  
('codellama','http://localhost:3000/api/v1/prediction/8c38942f-9202-4e44-82f6-5f14ed1d8981'),
('codegemma','http://localhost:3000/api/v1/prediction/4761b463-4b30-447c-92e6-f844acdef288'),
('starcoder2','http://localhost:3000/api/v1/prediction/34a81e53-a8ba-4e9a-9517-9e889dafd6cb'), 
('qwen2.5','http://localhost:3000/api/v1/prediction/a0064ca3-dfdd-4941-a76a-7b446a51963e'),
('codegeex4', 'http://localhost:3000/api/v1/prediction/17fca305-07f3-4d25-b025-12219a4f771a'),
('codeqwen','http://localhost:3000/api/v1/prediction/dc61e9e5-9274-48e0-9002-79fe98e781bb');

UPDATE vericode_app_llmmodels 
SET model_url = CASE model_name
    WHEN 'codellama' THEN 'http://localhost:3000/api/v1/prediction/8c38942f-9202-4e44-82f6-5f14ed1d8981'
    WHEN 'codegemma' THEN 'http://localhost:3000/api/v1/prediction/4761b463-4b30-447c-92e6-f844acdef288' 
    WHEN 'starcoder2' THEN 'http://localhost:3000/api/v1/prediction/34a81e53-a8ba-4e9a-9517-9e889dafd6cb' 
    WHEN 'qwen2.5' THEN 'http://localhost:3000/api/v1/prediction/a0064ca3-dfdd-4941-a76a-7b446a51963e'
    WHEN 'codegeex4' THEN 'http://localhost:3000/api/v1/prediction/17fca305-07f3-4d25-b025-12219a4f771a'
    WHEN 'codeqwen' THEN 'http://localhost:3000/api/v1/prediction/dc61e9e5-9274-48e0-9002-79fe98e781bb'
END
WHERE model_name IN ('codellama', 'codegemma', 'starcoder2', 'qwen2.5', 'codegeex4', 'codeqwen');


TRUNCATE TABLE vericode_app_llmmodels;

