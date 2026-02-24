---
outline: deep
---

# 方向二：视频生成作为世界模拟

### 5.1 方向概述

2024 年 Sora 的发布标志着一个范式转换：**大规模视频生成模型本身就是世界模拟器**。这一路线主张，在互联网规模的视频数据上训练的扩散模型会涌现出对 3D 空间、物理规律、物体交互的理解。然而，这一命题也引发了最激烈的学术争议——"视频生成 ≠ 世界理解"的批评方指出，视觉逼真度是世界理解的不可靠代理（[From Generative Engines to Actionable Simulators](https://arxiv.org/abs/2601.15533)）。

### 5.2 关键论文深度解析

#### 5.2.1 Sora 系列技术演进（2024–2025）

| 维度 | **Sora 1**（2024.02） | **Sora 2**（2025.09） |
|------|------|------|
| **架构** | 扩散 Transformer (DiT) + 时空 patch | 架构升级（细节未公开） |
| **核心创新** | 时空 patch 表示；可变分辨率/时长/宽高比；DALL·E 3 重标注 | 物理精度大幅提升（正确模拟碰撞反弹等）；多镜头复杂指令；逼真音频生成 |
| **涌现能力** | 3D 一致性、物体持久性、基础物理交互、零样本 Minecraft 模拟 | 精确物理模拟、"客串"功能、iOS 原生应用 |
| **局限** | 无法准确模拟玻璃破碎等复杂物理；空间混淆（左/右） | 部分复杂场景仍有伪影 |
| **开放性** | 闭源，仅技术报告 | 闭源，API + iOS 应用 |
| **关键意义** | 将"视频生成 = 世界模拟"推向学术前台 | 证明缩放效应可持续改善物理精度 |

**Sora 1 的学术影响**：将"视频生成模型是否可以成为世界模拟器"从学术假设提升为领域中心议题。缩放效应的证据（1×、4×、32× 计算量下质量显著提升）表明这是一条可行的路径。

#### 5.2.2 VideoWorld — 纯视频学习知识

| 项目 | 内容 |
|------|------|
| **论文** | [*VideoWorld: Exploring Knowledge Learning from Unlabeled Videos*](https://arxiv.org/abs/2501.09781) |
| **日期** | 2025.01 |
| **开源** | 代码、数据、模型全部开源 |

**核心发现**：
1. **纯视频训练**提供了足够信息来学习规则、推理和规划能力
2. 引入**潜在动力学模型（Latent Dynamics Model, LDM）**作为知识获取的核心组件
3. 仅 3 亿参数模型**从视频达到围棋五段水平**，无需搜索算法或奖励机制
4. 在机器人任务（CALVIN、RLBench）中有效学习多样控制操作

**意义**：为"视频预测模型就是真正的世界模型"提供了最强证据——它们能从纯视觉观察中学习规则、物理和策略。

### 5.3 前沿论文全景

| 论文 | 机构/时间 | 核心贡献 | 链接 |
|------|----------|---------|------|
| [WorldDreamer](https://arxiv.org/abs/2401.09985) | 清华/GigaAI, 2024.01 | 首个通用世界模型：遮蔽 token 预测统一 T2V/I2V/编辑 | [arXiv](https://arxiv.org/abs/2401.09985) |
| [LVM](https://arxiv.org/abs/2312.00785) | UC Berkeley, 2023.12 | 大视觉模型：4200 亿视觉 token 上 next-token 预测 | [arXiv](https://arxiv.org/abs/2312.00785) |
| [**CogVideoX**](https://arxiv.org/abs/2408.06072) | 智谱 AI/清华, ICLR 2025 | 3D VAE + Expert DiT，10 秒连续视频，12.4k ⭐ | [GitHub](https://github.com/THUDM/CogVideo) |
| [**HunyuanVideo**](https://arxiv.org/abs/2412.03603) | 腾讯, 2024.12 | 130 亿参数，双流→单流 DiT + MLLM 编码器 | [GitHub](https://github.com/Tencent/HunyuanVideo) |
| [**Wan2.1**](https://arxiv.org/abs/2503.20314) | 阿里巴巴, 2025.03 | 14B 参数，VBench 83.7%，Wan-VAE 支持无限长度 1080P | [GitHub](https://github.com/Wan-Video/Wan2.1)（15.4k ⭐） |
| [**Step-Video-T2V**](https://arxiv.org/abs/2502.10248) | 阶跃星辰, 2025.02 | 300 亿参数，首创 Video-DPO 对齐技术 | [GitHub](https://github.com/stepfun-ai/Step-Video-T2V) |
| [**SkyReels-V2**](https://arxiv.org/abs/2504.13074) | 昆仑万维, 2025.04 | **首个开源 Diffusion Forcing 模型**，VBench SOTA 83.9% | [GitHub](https://github.com/SkyworkAI/SkyReels-V2) |
| **Seedance 1.0→2.0** | 字节跳动 | 闭源；2.0 统一多模态架构，导演级控制 | 产品：即梦/豆包 |
| **可灵 Kling** | 快手 | 闭源；MVL 方法，中国市场占有率领先 | [klingai.com](https://klingai.com) |
| [AniSora](https://arxiv.org/abs/2412.10255) | 哔哩哔哩, 2024.12 | 首个动画视频生成系统，扩展到艺术/幻想世界模拟 | [GitHub](https://github.com/bilibili/Index-anisora) |
| [Open-Sora](https://github.com/hpcaitech/Open-Sora) | 2024–2025 | 最大规模 Sora 开源复现，110 亿参数 v2.0 仅 $200K 训练成本 | [GitHub](https://github.com/hpcaitech/Open-Sora)（28.6k ⭐） |
| [Open-Sora-Plan](https://github.com/PKU-YuanGroup/Open-Sora-Plan) | 北大, 2024 | 开源 Sora 复现，支持长视频生成 | [GitHub](https://github.com/PKU-YuanGroup/Open-Sora-Plan)（12.1k ⭐） |
| [VideoReward / Flow-DPO](https://arxiv.org/abs/2501.13918) | 2025.01 | 视频生成的 RLHF 对齐：多维度奖励模型 + 流模型 DPO | [arXiv](https://arxiv.org/abs/2501.13918) |
| [Causal-Forcing](https://arxiv.org/abs/2602.02214) | 清华 thu-ml, 2026.02 | 自回归扩散蒸馏用于高质量实时交互视频生成 | [GitHub](https://github.com/thu-ml/Causal-Forcing) |
| [Matrix-Game 2.0](https://arxiv.org/abs/2508.13009) | SkyworkAI, 2025 | 开源实时流式交互式世界模型 | [GitHub](https://github.com/SkyworkAI/Matrix-Game) |
| [LongVie 2](https://arxiv.org/abs/2512.13604) | 2025.12 | 多模态可控超长视频世界模型 | [arXiv](https://arxiv.org/abs/2512.13604) |
| [LIVE](https://arxiv.org/abs/2602.03747) | 2026.02 | 长时交互式视频世界建模 | [arXiv](https://arxiv.org/abs/2602.03747) |
| [VerseCrafter](https://arxiv.org/abs/2601.05138) | TencentARC, 2026.01 | 动态真实视频世界模型 + 4D 几何控制 | [arXiv](https://arxiv.org/abs/2601.05138) |
| [Astra](https://arxiv.org/abs/2512.08931) | 2025.12 | 自回归去噪的通用交互世界模型 | [arXiv](https://arxiv.org/abs/2512.08931) |

**视频基座模型架构趋同**：全球主要开源视频模型在架构上高度趋同——**DiT + 3D VAE + Flow Matching** 成为共识技术栈。差异化竞争集中在 VAE 设计（Wan-VAE 无限长度 vs CogVideoX 3D VAE）、后训练策略（Video-DPO / Diffusion Forcing / RL）和文本编码器（MLLM vs T5）上。

### 5.4 方向小结

| 特征 | 描述 |
|------|------|
| **优势** | 视觉丰富、可利用互联网规模数据、涌现能力显著 |
| **局限** | 物理精度不足、缺乏动作条件化、计算成本极高 |
| **核心争议** | "视频生成 ≠ 世界理解"——视觉逼真度是世界理解的不可靠代理 |
| **趋势** | 从被动生成走向动作可控的交互式模拟；实时性成为新要求；RLHF 对齐技术迁入 |
| **代表方法** | Sora 系列、VideoWorld、CogVideoX、HunyuanVideo、Wan2.1、SkyReels-V2 |
