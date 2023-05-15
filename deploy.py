import boto3
import os

def upload_files(path):
    session = boto3.Session()

    s3 = session.resource('s3')
    bucket = s3.Bucket('arabela-frontend-app')

    for subdir, dirs, files in os.walk(path):
        for file in files:
            full_path = os.path.join(subdir, file)
            with open(full_path, 'rb') as data:
                bucket.put_object(Key=full_path[len(path)+1:], Body=data)

# Executa o comando npm run build
os.system("npm run build")

# Limpa o conteúdo do bucket do S3
s3 = boto3.client('s3')
objects = s3.list_objects(Bucket='arabela-frontend-app')
if 'Contents' in objects:
    delete_keys = {'Objects': [{'Key': k['Key']} for k in objects['Contents']]}
    s3.delete_objects(Bucket='arabela-frontend-app', Delete=delete_keys)

# Sincroniza o conteúdo do diretório "out" com o bucket do S3
upload_files('./out')
