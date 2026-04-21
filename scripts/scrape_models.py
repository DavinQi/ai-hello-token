#!/usr/bin/env python3
"""
数据抓取脚本，用于从各个模型提供商的网站抓取数据并更新 models.json 文件
"""

import os
import json
import time
import requests
from datetime import datetime

# 模型数据结构
def get_initial_models():
    """获取初始模型数据"""
    return [
        {
            "id": "gpt-3.5-free",
            "name": "GPT-3.5",
            "provider": "OpenAI",
            "type": "free",
            "description": "Free version of GPT-3.5 with limited tokens",
            "features": ["Chat completion", "Limited tokens"],
            "status": "available",
            "lastChecked": datetime.utcnow().isoformat() + "Z",
            "url": "https://openai.com"
        },
        {
            "id": "claude-3-sonnet-free",
            "name": "Claude 3 Sonnet",
            "provider": "Anthropic",
            "type": "free",
            "description": "Free version with limited usage",
            "features": ["Chat completion", "Reasoning"],
            "status": "available",
            "lastChecked": datetime.utcnow().isoformat() + "Z",
            "url": "https://www.anthropic.com"
        },
        {
            "id": "gemini-pro-free",
            "name": "Gemini Pro",
            "provider": "Google",
            "type": "free",
            "description": "Free version with usage limits",
            "features": ["Multimodal", "Chat completion"],
            "status": "available",
            "lastChecked": datetime.utcnow().isoformat() + "Z",
            "url": "https://gemini.google.com"
        },
        {
            "id": "gpt-4-paid",
            "name": "GPT-4",
            "provider": "OpenAI",
            "type": "paid",
            "price": {
                "currency": "USD",
                "amount": 20,
                "unit": "month"
            },
            "description": "Premium GPT-4 model with advanced capabilities",
            "features": ["Advanced reasoning", "More tokens"],
            "status": "available",
            "lastChecked": datetime.utcnow().isoformat() + "Z",
            "url": "https://openai.com"
        },
        {
            "id": "claude-3-opus-paid",
            "name": "Claude 3 Opus",
            "provider": "Anthropic",
            "type": "paid",
            "price": {
                "currency": "USD",
                "amount": 24,
                "unit": "month"
            },
            "description": "Top-tier model with exceptional performance",
            "features": ["Advanced reasoning", "Long context"],
            "status": "available",
            "lastChecked": datetime.utcnow().isoformat() + "Z",
            "url": "https://www.anthropic.com"
        },
        {
            "id": "gemini-ultra-paid",
            "name": "Gemini Ultra",
            "provider": "Google",
            "type": "paid",
            "price": {
                "currency": "USD",
                "amount": 19.99,
                "unit": "month"
            },
            "description": "Google's most capable AI model",
            "features": ["Advanced multimodal", "Long context"],
            "status": "available",
            "lastChecked": datetime.utcnow().isoformat() + "Z",
            "url": "https://gemini.google.com"
        },
        {
            "id": "llama-local",
            "name": "LLaMA",
            "provider": "Meta",
            "type": "local",
            "description": "Local LLaMA model for self-hosting",
            "features": ["Privacy", "Customizable"],
            "status": "available",
            "lastChecked": datetime.utcnow().isoformat() + "Z",
            "localSetup": {
                "token": "META_TOKEN",
                "setupGuide": "https://github.com/facebookresearch/llama",
                "requirements": ["Python 3.8+", "CUDA enabled GPU (recommended)", "At least 8GB RAM", "Sufficient storage"]
            }
        },
        {
            "id": "mistral-local",
            "name": "Mistral",
            "provider": "Mistral AI",
            "type": "local",
            "description": "Local Mistral model for self-hosting",
            "features": ["Efficient", "Fast inference"],
            "status": "available",
            "lastChecked": datetime.utcnow().isoformat() + "Z",
            "localSetup": {
                "token": "MISTRAL_TOKEN",
                "setupGuide": "https://github.com/mistralai/mistral-src",
                "requirements": ["Python 3.8+", "CUDA enabled GPU", "At least 4GB RAM", "Sufficient storage"]
            }
        }
    ]

def check_website_availability(url):
    """检查网站是否可用"""
    try:
        response = requests.get(url, timeout=10)
        return response.status_code == 200
    except Exception:
        return False

def update_model_status(models):
    """更新模型状态"""
    for model in models:
        if model.get('url'):
            is_available = check_website_availability(model['url'])
            model['status'] = 'available' if is_available else 'unavailable'
        model['lastChecked'] = datetime.utcnow().isoformat() + "Z"
    return models

def main():
    """主函数"""
    # 获取初始模型数据
    models = get_initial_models()
    
    # 更新模型状态
    models = update_model_status(models)
    
    # 构建模型数据
    model_data = {
        "lastUpdated": datetime.utcnow().isoformat() + "Z",
        "models": models
    }
    
    # 确保 data 目录存在
    os.makedirs('data', exist_ok=True)
    
    # 写入 models.json 文件
    with open('data/models.json', 'w', encoding='utf-8') as f:
        json.dump(model_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ 模型数据已更新，共 {len(models)} 个模型")
    print(f"📅 最后更新时间: {model_data['lastUpdated']}")

if __name__ == "__main__":
    main()