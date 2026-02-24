---
outline: deep
---

# 开源生态全景

### 14.1 世界模型核心项目

| 项目 | 机构 | Stars | 许可证 | 核心特征 | 链接 |
|------|------|-------|--------|---------|------|
| **Cosmos** | NVIDIA | ![](https://img.shields.io/github/stars/NVIDIA/Cosmos?style=social) | Apache 2.0 | 物理世界基础模型，预训练+微调全链路 | [GitHub](https://github.com/NVIDIA/Cosmos) |
| **CogVideoX** | 智谱 AI / 清华 | ![](https://img.shields.io/github/stars/THUDM/CogVideo?style=social) | Apache 2.0 | 全链路开源视频生成（训练+推理+数据） | [GitHub](https://github.com/THUDM/CogVideo) |
| **Wan2.1** | 阿里巴巴 | ![](https://img.shields.io/github/stars/Wan-Video/Wan2.1?style=social) | Apache 2.0 | 1.3B–14B 多规模视频生成 | [GitHub](https://github.com/Wan-Video/Wan2.1) |
| **HunyuanVideo** | 腾讯 | ![](https://img.shields.io/github/stars/Tencent/HunyuanVideo?style=social) | Tencent | 高质量长视频生成 | [GitHub](https://github.com/Tencent/HunyuanVideo) |
| **SkyReels-V2** | 昆仑万维 | ![](https://img.shields.io/github/stars/SkyworkAI/SkyReels-V2?style=social) | Apache 2.0 | 无限时长视频+物理世界模型 | [GitHub](https://github.com/SkyworkAI/SkyReels-V2) |
| **DreamerV3** | Danijar Hafner | ![](https://img.shields.io/github/stars/danijar/dreamerv3?style=social) | MIT | 通用强化学习世界模型 | [GitHub](https://github.com/danijar/dreamerv3) |
| **DIAMOND** | Microsoft | ![](https://img.shields.io/github/stars/eloialonso/diamond?style=social) | MIT | 扩散世界模型玩 Atari | [GitHub](https://github.com/eloialonso/diamond) |
| **AniSora** | 清华 | ![](https://img.shields.io/github/stars/bilibili/AniSora?style=social) | Apache 2.0 | 动漫可控视频生成 | [GitHub](https://github.com/bilibili/AniSora) |
| **LWM** | UC Berkeley | ![](https://img.shields.io/github/stars/LargeWorldModel/LWM?style=social) | Apache 2.0 | 大世界模型（百万 token 上下文） | [GitHub](https://github.com/LargeWorldModel/LWM) |

### 14.2 上游基础设施

| 项目 | 功能 | 链接 |
|------|------|------|
| **Diffusers** (HuggingFace) | 扩散模型标准库，支持 DiT/Flow Matching | [GitHub](https://github.com/huggingface/diffusers) |
| **xDiT** | DiT 模型分布式推理加速 | [GitHub](https://github.com/xdit-project/xDiT) |
| **Open-Sora** (HPC-AI Tech) | Sora 复现框架 | [GitHub](https://github.com/hpcaitech/Open-Sora) |
| **Open-Sora-Plan** (PKU) | Sora 复现计划 | [GitHub](https://github.com/PKU-YuanGroup/Open-Sora-Plan) |
| **Gymnasium** (Farama) | RL 环境标准接口 | [GitHub](https://github.com/Farama-Foundation/Gymnasium) |
| **MineRL** | Minecraft RL 环境 | [GitHub](https://github.com/minerllabs/minerl) |

### 14.3 开源成熟度评估

| 维度 | 🟢 成熟 | 🟡 发展中 | 🔴 早期 |
|------|---------|----------|---------|
| **视频生成** | CogVideoX、Wan2.1（全链路） | HunyuanVideo（推理为主） | Sora（未开源） |
| **RL 世界模型** | DreamerV3、DIAMOND | TD-MPC2 | Dreamer V4（未开源） |
| **自动驾驶** | — | Vista（部分开源） | GAIA 系列（未开源） |
| **具身 AI** | — | — | 多数为论文复现 |
| **物理基座** | Cosmos（全栈开源） | — | — |
| **JEPA** | — | V-JEPA（权重开放） | V-JEPA 2（未开源） |

**开源趋势**：
- 中国机构（阿里、腾讯、智谱、昆仑万维）在视频生成方向的开源力度全球领先
- NVIDIA Cosmos 定义了"预训练基座 + 领域微调"的开源范式
- RL 世界模型开源生态最为成熟（DreamerV3 可直接复现）
- 具身 AI 和自动驾驶方向开源严重不足，制约社区发展
