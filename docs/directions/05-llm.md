---
outline: deep
---

# 方向五：LLM 作为与增强世界模型

### 8.1 方向概述

这一方向探索三个核心问题：（1）LLM 是否隐含地学习了世界模型？（2）如何将 LLM 显式地用作世界模型进行规划？（3）Agent + World Model 如何协同？

### 8.2 关键论文深度解析

#### 8.2.1 Othello-GPT — 序列模型中涌现世界表征

| 项目 | 内容 |
|------|------|
| **论文** | [*Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task*](https://arxiv.org/abs/2210.13382) |
| **发表** | **ICLR 2023, Notable Top 5%** |

**实验设计**：训练一个 GPT 变体预测黑白棋（Othello）的合法走法——模型对游戏规则完全无先验知识。

**关键发现**：
1. 使用**非线性探针**揭示模型内部涌现出了棋盘状态的表征
2. **干预实验**：修改内部表征会因果地改变预测的合法走法
3. 探针恢复棋盘状态的错误率仅 0.01%

**里程碑意义**：**序列模型在 next-token 预测中可以涌现出因果性世界模型**的最重要证据之一。

#### 8.2.2 RAP — 推理即规划

| 项目 | 内容 |
|------|------|
| **论文** | [*Reasoning with Language Model is Planning with World Model*](https://arxiv.org/abs/2305.14992) |
| **发表** | **EMNLP 2023** |

**方法**：将 LLM 同时用作**世界模型**（预测状态转移）和**智能体**（选择行动），使用**蒙特卡洛树搜索（MCTS）**在 LLM 生成的世界状态上进行战略性探索。

**成果**：LLaMA-33B + RAP 在计划生成任务中**超越 GPT-4 + CoT 33%**。

### 8.3 前沿论文全景

| 论文 | 会议/时间 | 核心贡献 | 链接 |
|------|----------|---------|------|
| [LLM 表征空间与时间](https://arxiv.org/abs/2310.02207) | 2023.10 | Llama-2 学习到空间坐标和时间信息的线性表征 | [arXiv](https://arxiv.org/abs/2310.02207) |
| [LAW 框架](https://arxiv.org/abs/2312.05230) | NeurIPS 2023 Tutorial | 语言模型(L)、智能体模型(A)、世界模型(W) 三位一体 | [arXiv](https://arxiv.org/abs/2312.05230) |
| [从词模型到世界模型](https://arxiv.org/abs/2306.12672) | 2023.06 | LLM 翻译为概率程序，贝叶斯推理实现世界推理 | [arXiv](https://arxiv.org/abs/2306.12672) |
| [语言模型遇见世界模型](https://arxiv.org/abs/2305.10626) | 2023.05 | 具身经验微调 LM，物理推理提升 64.28% | [arXiv](https://arxiv.org/abs/2305.10626) |
| [LWM](https://arxiv.org/abs/2402.08268) | UC Berkeley, 2024 | 基于 RingAttention 的百万 token 视频+语言世界模型 | [GitHub](https://github.com/LargeWorldModel/LWM) [![Stars](https://img.shields.io/github/stars/LargeWorldModel/LWM?style=social)](https://github.com/LargeWorldModel/LWM) |
| [LLM-Sim](https://arxiv.org/abs/2406.06485) | ACL 2024 | 语言模型作为文本世界模拟器 | [arXiv](https://arxiv.org/abs/2406.06485) |
| [WebDreamer](https://arxiv.org/abs/2411.06559) | 2024.11 | LLM 是否是互联网的世界模型 | [arXiv](https://arxiv.org/abs/2411.06559) |
| [WALL-E 2.0](https://arxiv.org/abs/2504.15785) | 2025.04 | 神经符号学习改善基于世界模型的 LLM Agent | [arXiv](https://arxiv.org/abs/2504.15785) |
| [WorldLLM](https://arxiv.org/abs/2506.06725) | 2025.06 | 好奇心驱动的理论构建改善 LLM 世界建模 | [arXiv](https://arxiv.org/abs/2506.06725) |
| [Affordances Enable Partial WM](https://arxiv.org/abs/2602.10390) | DeepMind, 2026.02 | 理论证明语言条件 Agent 必然拥有基于 affordance 的部分世界模型 | [arXiv](https://arxiv.org/abs/2602.10390) |
| [RL World Model for LLM Agents](https://arxiv.org/abs/2602.05842) | 2026.02 | 面向 LLM Agent 的强化世界模型学习 | [arXiv](https://arxiv.org/abs/2602.05842) |
| [On Emergent Social WMs](https://arxiv.org/abs/2602.10298) | 2026.02 | LLM 中涌现的社会世界模型——心智理论与语用推理 | [arXiv](https://arxiv.org/abs/2602.10298) |

### 8.4 方向小结

| 特征 | 描述 |
|------|------|
| **优势** | 利用 LLM 的广泛知识、支持自然语言交互、Agent+WM 范式兴起 |
| **局限** | LLM 的物理推理仍不可靠、幻觉问题、缺乏感知基础 |
| **核心洞察** | LLM 确实隐含学习了某些世界知识，但具身经验和结构化世界模型对于鲁棒的物理推理不可或缺 |
| **开放问题** | "LLM 是否真正具有世界模型"仍是开放性问题 |
