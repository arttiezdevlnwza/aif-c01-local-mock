window.REVIEW_INSIGHTS = {
  version: '2026-09-10-set-8-10',
  source: 'manual-review',
  sets: {
    'local-set-8': {
      title: 'Local Mock Set 8',
      items: [
        { questionId: 4, type: 'language', key: 'async-vs-batch', topic: 'Asynchronous vs Batch Inference', note: 'อ่าน “hundreds of megabytes” เป็นจำนวนไฟล์ แทนที่จะเป็นขนาดของ individual file' },
        { questionId: 10, type: 'language', key: 'textract-vs-rekognition', topic: 'Textract vs Rekognition', note: 'เห็นว่าเป็นภาพสแกนแล้ว associate ไป Rekognition ทั้งที่ clue คือ text/tables/key-value fields' },
        { questionId: 40, type: 'language', key: 'rag-evaluation', topic: 'RAG retrieval relevance vs generation faithfulness', note: 'อ่านตัวเลือกเร็วไป ทั้งที่ stem ระบุแล้วว่า retrieved documents highly relevant' },

        { questionId: 11, type: 'concept', key: 'sagemaker-canvas', topic: 'SageMaker Canvas' },
        { questionId: 45, type: 'concept', key: 'flows-vs-agents', topic: 'Bedrock Flows vs Agents' },
        { questionId: 49, type: 'concept', key: 'interpretability-explainability', topic: 'Interpretability vs Explainability' },
        { questionId: 50, type: 'concept', key: 'automated-reasoning-grounding', topic: 'Automated Reasoning vs Contextual Grounding' },
        { questionId: 59, type: 'concept', key: 'security-service-map', topic: 'KMS / TLS / Macie service map' },
        { questionId: 61, type: 'concept', key: 'governance-frameworks', topic: 'NIST AI RMF and governance frameworks' },

        { questionId: 6, type: 'confidence', key: 'regression-metrics', topic: 'RMSE' },
        { questionId: 17, type: 'confidence', key: 'transformer-attention', topic: 'Attention' },
        { questionId: 19, type: 'confidence', key: 'multimodality', topic: 'Multimodality' },
        { questionId: 27, type: 'confidence', key: 'prompt-security', topic: 'Prompt Injection' },
        { questionId: 31, type: 'confidence', key: 'system-prompt', topic: 'System Prompt' },
        { questionId: 38, type: 'confidence', key: 'rag-retrieval-tuning', topic: 'RAG top-k and reranking' },
        { questionId: 39, type: 'confidence', key: 'metadata-filtering', topic: 'Metadata Filtering' },
        { questionId: 42, type: 'confidence', key: 'model-evaluation', topic: 'Human Evaluation' },
        { questionId: 51, type: 'confidence', key: 'human-oversight', topic: 'Human Oversight' },
        { questionId: 53, type: 'confidence', key: 'fairness-metrics', topic: 'Group Fairness Metrics' },
        { questionId: 54, type: 'confidence', key: 'adversarial-attacks', topic: 'Adversarial Input' },
        { questionId: 57, type: 'confidence', key: 'iam-permissions', topic: 'Permissions Boundary' },
        { questionId: 58, type: 'confidence', key: 'shared-responsibility', topic: 'RDS Shared Responsibility' },
        { questionId: 62, type: 'confidence', key: 'eu-ai-act', topic: 'EU AI Act — High Risk' },
        { questionId: 63, type: 'confidence', key: 'data-governance', topic: 'Data Residency' }
      ]
    },

    'local-set-9': {
      title: 'Local Mock Set 9',
      note: 'Q32 excluded: answer-key bug; Prompt Management was the correct user answer.',
      items: [
        { questionId: 2, type: 'concept', key: 'classification-metrics', topic: 'Precision vs Accuracy' },
        { questionId: 8, type: 'concept', key: 'ml-lifecycle', topic: 'ML lifecycle order' },
        { questionId: 12, type: 'concept', key: 'sagemaker-data-wrangler', topic: 'SageMaker Data Wrangler' },
        { questionId: 15, type: 'concept', key: 'inference-controls', topic: 'Temperature direction' },
        { questionId: 18, type: 'concept', key: 'tokenization-embeddings', topic: 'Tokenization vs Embeddings' },
        { questionId: 37, type: 'concept', key: 'rag-runtime-flow', topic: 'RAG runtime order' },
        { questionId: 50, type: 'concept', key: 'automated-reasoning-grounding', topic: 'Automated Reasoning vs Contextual Grounding' },
        { questionId: 57, type: 'concept', key: 'iam-permissions', topic: 'Identity Policy vs Permissions Boundary' },
        { questionId: 58, type: 'concept', key: 'shared-responsibility', topic: 'EC2 Shared Responsibility' },
        { questionId: 61, type: 'concept', key: 'governance-frameworks', topic: 'ISO 27001 vs NIST AI RMF' },
        { questionId: 64, type: 'concept', key: 'private-connectivity', topic: 'NAT Gateway vs PrivateLink' },

        { questionId: 6, type: 'confidence', key: 'regression-metrics', topic: 'MAE vs RMSE' },
        { questionId: 13, type: 'confidence', key: 'training-hyperparameters', topic: 'Learning Rate' },
        { questionId: 31, type: 'confidence', key: 'metadata-filtering', topic: 'Metadata Filtering' },
        { questionId: 38, type: 'confidence', key: 'rag-chunking', topic: 'RAG chunking' },
        { questionId: 39, type: 'confidence', key: 'metadata-filtering', topic: 'Tenant metadata filtering' },
        { questionId: 40, type: 'confidence', key: 'rag-evaluation', topic: 'Retrieval relevance' },
        { questionId: 46, type: 'confidence', key: 'cross-region-inference', topic: 'Cross-Region Inference' },
        { questionId: 53, type: 'confidence', key: 'fairness-metrics', topic: 'Fairness / subgroup metrics' },
        { questionId: 62, type: 'confidence', key: 'eu-ai-act', topic: 'EU AI Act — Unacceptable Risk' }
      ]
    },

    'local-set-10': {
      title: 'Local Mock Set 10',
      items: [
        { questionId: 1, type: 'concept', key: 'unsupervised-learning', topic: 'Clustering / Unsupervised Learning' },
        { questionId: 22, type: 'concept', key: 'agentcore-components', topic: 'AgentCore Runtime' },
        { questionId: 25, type: 'concept', key: 'mcp-primitives', topic: 'MCP Resources vs Tools' },
        { questionId: 53, type: 'concept', key: 'fairness-metrics', topic: 'Fairness disparity metrics' },
        { questionId: 62, type: 'concept', key: 'eu-ai-act', topic: 'EU AI Act — Limited Risk' },

        { questionId: 5, type: 'confidence', key: 'model-registry', topic: 'SageMaker Model Registry' },
        { questionId: 6, type: 'confidence', key: 'regression-metrics', topic: 'R-squared' },
        { questionId: 12, type: 'confidence', key: 'glue-catalog', topic: 'Glue Crawler and Data Catalog' },
        { questionId: 13, type: 'confidence', key: 'inference-controls', topic: 'Max output tokens' },
        { questionId: 15, type: 'confidence', key: 'nondeterminism', topic: 'Nondeterminism' },
        { questionId: 17, type: 'confidence', key: 'transformer-attention', topic: 'Transformer' },
        { questionId: 24, type: 'confidence', key: 'context-engineering', topic: 'Context Engineering' },
        { questionId: 28, type: 'confidence', key: 'genai-stack', topic: 'GenAI technology stack / Bedrock layer' },
        { questionId: 29, type: 'confidence', key: 'intelligent-prompt-routing', topic: 'Intelligent Prompt Routing' },
        { questionId: 31, type: 'confidence', key: 'metadata-filtering', topic: 'System prompt vs metadata filtering' },
        { questionId: 32, type: 'confidence', key: 'prompt-management', topic: 'Prompt Management' },
        { questionId: 39, type: 'confidence', key: 'metadata-filtering', topic: 'Metadata Filtering vs Reranking' },
        { questionId: 49, type: 'confidence', key: 'interpretability-explainability', topic: 'Interpretability vs Explainability' },
        { questionId: 50, type: 'confidence', key: 'automated-reasoning-grounding', topic: 'Automated Reasoning vs Contextual Grounding' },
        { questionId: 56, type: 'confidence', key: 'human-centered-ai', topic: 'Human-centered AI / Recourse' },
        { questionId: 57, type: 'confidence', key: 'iam-permissions', topic: 'Service Control Policy (SCP)' },
        { questionId: 61, type: 'confidence', key: 'governance-frameworks', topic: 'CAF-AI vs NIST / ISO / EU AI Act' },
        { questionId: 63, type: 'confidence', key: 'data-governance', topic: 'Data Residency vs Data Sovereignty' }
      ]
    }
  }
};
