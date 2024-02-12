terraform {
  required_version = ">= 1.7.3"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.36.0"
    }
  }
}

provider "aws" {
  region = "ap-northeast-1"
}

# Create S3 Bucket Start
resource "aws_s3_bucket" "s3_bucket_create" {
  bucket = "roadchain-dev"

  tags = {
    Name        = "RoadChain-dev"
    Environment = "Dev"
  }
}

resource "aws_s3_object" "bucket_object_shop_create" {
  bucket = aws_s3_bucket.s3_bucket_create.bucket

  key = "shop"
}

resource "aws_s3_object" "bucket_object_user_create" {
  bucket = aws_s3_bucket.s3_bucket_create.bucket

  key = "user"
}
# Create S3 Bucket End

# S3 Bucket Public Access Block Start
resource "aws_s3_bucket_ownership_controls" "s3_bucket_ownership_controls_configure" {
  bucket = aws_s3_bucket.s3_bucket_create.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "s3_bucket_public_access_policy_configure" {
  bucket = aws_s3_bucket.s3_bucket_create.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "s3_bucket_acl_configure" {
  depends_on = [
    aws_s3_bucket_ownership_controls.s3_bucket_ownership_controls_configure,
    aws_s3_bucket_public_access_block.s3_bucket_public_access_policy_configure,
  ]

  bucket = aws_s3_bucket.s3_bucket_create.id
  acl    = "private"
}
# S3 Bucket Public Access Block End
