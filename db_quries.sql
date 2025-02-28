create database vericodedb;
use vericodedb;
show tables;

select * from vericode_app_llmmodels;
-- LLM Models
INSERT INTO vericode_app_llmmodels (model_name, model_url)  
VALUES  
    ('Mistral', 'http://localhost:3000/api/v1/prediction/fb0b4555-9e6f-4e05-8048-3cbc2e70c880'),
    ('llama3', 'http://localhost:3000/api/v1/prediction/5f7fe4a6-8eda-4e6a-83b1-c15415057040');


-- Code Models
INSERT INTO vericode_app_llmmodels (model_name, model_url)  
VALUES  
('codellama','http://localhost:3000/api/v1/prediction/8c38942f-9202-4e44-82f6-5f14ed1d8981'),
('codegemma','http://localhost:3000/api/v1/prediction/4761b463-4b30-447c-92e6-f844acdef288'),
('starcoder2','http://localhost:3000/api/v1/prediction/34a81e53-a8ba-4e9a-9517-9e889dafd6cb'), 
('qwen2.5','http://localhost:3000/api/v1/prediction/a0064ca3-dfdd-4941-a76a-7b446a51963e'),
('codegeex4', 'http://localhost:3000/api/v1/prediction/17fca305-07f3-4d25-b025-12219a4f771a'),
('codeqwen','http://localhost:3000/api/v1/prediction/dc61e9e5-9274-48e0-9002-79fe98e781bb');


TRUNCATE TABLE vericode_app_llmmodels;

