---
outline: deep
---

# 方向四：具身 AI 世界模型

### 7.1 方向概述

具身 AI 是 **2026 年世界模型研究最活跃的方向**（占全部论文约 30%）。核心目标是为机器人操作、导航、运动控制构建世界模型，实现在想象中学习和规划。2025–2026 年，**VLA（Vision-Language-Action）与世界模型的深度融合**成为最重要的技术趋势，多个重量级工作验证了"在世界模型中训练机器人策略"的可行性。

### 7.2 关键论文深度解析

#### 7.2.1 DreamZero — 世界模型即策略

| 项目 | 内容 |
|------|------|
| **论文** | [*DreamZero: World Action Models are Zero-shot Policies*](https://arxiv.org/abs/2602.15922) |
| **机构** | Google DeepMind |
| **日期** | 2026.02 |

**方法**：14B 参数视频扩散模型联合建模视频和动作（World Action Model, WAM），作为 zero-shot 策略直接输出机器人动作。

**核心突破**：
- **世界模型本身就是策略**——不需要额外的策略网络
- 7Hz 实时闭环控制
- 泛化能力比 SOTA VLA 提升 **2× 以上**
- 仅需 **30 分钟 play data** 即可跨具身形态迁移

#### 7.2.2 FLARE — 隐式世界模型

| 项目 | 内容 |
|------|------|
| **论文** | [*FLARE: Implicit World Models for Robotic Learning*](https://arxiv.org/abs/2505.15659) |
| **机构** | NVIDIA，集成 Isaac GR00T |
| **日期** | 2025.05 |

**核心洞见**：世界模型不一定要显式生成未来，只需让策略网络"隐式地预测未来"就能大幅提升性能。在扩散 Transformer 中添加少量 token，将特征与未来观测的潜在嵌入对齐。

**成果**：提升 **26%**，**近零推理开销**——是实用性最强的世界模型增强方法之一。

#### 7.2.3 V-JEPA 2-AC — 表征空间的具身控制

| 项目 | 内容 |
|------|------|
| **论文** | [*V-JEPA 2: Self-Supervised Video Model for Understanding, Prediction and Planning*](https://arxiv.org/abs/2506.09985) |
| **机构** | Meta AI |
| **日期** | 2025.06 |

V-JEPA 2 系列的 Action-Conditioned 变体将 JEPA 的表征空间预测扩展到具身控制场景。在表示空间（而非像素空间）进行预测和规划，实现了理解、预测与规划的统一。

### 7.3 VLA + World Model 融合：五大范式

VLA 与世界模型的融合是 2025–2026 年最重要的技术趋势。当前已形成五种成熟范式：

#### 范式 1：世界模型作为 RL 模拟器

在动作条件视频世界模型中对 VLA 做 RL 微调，VLM 提供奖励信号。

| 工作 | 方法 | 效果 |
|------|------|------|
| [**World-Gymnast**](https://arxiv.org/abs/2602.02454) | 视频 WM 中 RL 微调 VLA，VLM 奖励 | **比 SFT 提升 18×，比模拟器提升 2×** |
| [GigaBrain-0.5M](https://arxiv.org/abs/2602.12099) | RAMP（RL via World Model）优化 VLA | 操控任务提升约 30% |

#### 范式 2：VLA 与世界模型迭代共进化

VLA 策略与世界模型交替迭代训练，双方同时改进。

| 工作 | 方法 | 效果 |
|------|------|------|
| [**VLAW**](https://arxiv.org/abs/2602.12063) | VLA 与 WM 交替迭代训练 | 绝对性能提升 **+39.2%** |
| [World-VLA-Loop](https://arxiv.org/abs/2602.06508) | 视频 WM 与 VLA 闭环学习 | 双方同时改进 |

#### 范式 3：隐式世界模型增强 VLA

不显式生成未来，通过辅助损失对齐未来表征（仅训练时使用）。

| 工作 | 方法 | 效果 |
|------|------|------|
| [**FLARE**](https://arxiv.org/abs/2505.15659) | 扩散 Transformer + 少量预测 token | **提升 26%，近零推理开销** |
| [VLA-JEPA](https://arxiv.org/abs/2602.10098) | 潜在世界模型增强 VLA | 超越基线 |

#### 范式 4：统一世界-动作模型（WAM）

视频扩散骨干联合建模视频预测和动作预测。

| 工作 | 方法 | 效果 |
|------|------|------|
| [**DreamZero**](https://arxiv.org/abs/2602.15922) | 14B WAM 联合建模视频+动作 | **泛化 2×+，30min 数据跨具身迁移** |
| [UWM](https://arxiv.org/abs/2504.02792) | 统一 Transformer 中视频+动作扩散 | 支持有/无动作标注混合训练 |

#### 范式 5：潜在动作预训练

从互联网视频（无动作标签）中学习潜在动作表示，再微调到真实动作。

| 工作 | 方法 | 效果 |
|------|------|------|
| [**LAPA**](https://arxiv.org/abs/2410.11758) | VQ-VAE 从视频提取潜在动作 | **超越有真实动作标签训练的 SOTA VLA**（ICLR 2025） |
| [Motus](https://github.com/thu-ml/Motus) | 统一潜在动作世界模型 | 无需动作标签的通用预训练 |

### 7.4 前沿论文全景

| 论文 | 会议/时间 | 核心贡献 | 链接 |
|------|----------|---------|------|
| [DWL](https://arxiv.org/abs/2408.14472) | RSS 2024 最佳论文入围 | 去噪世界模型学习用于人形运动 | [arXiv](https://arxiv.org/abs/2408.14472) |
| [ManiGaussian](https://arxiv.org/abs/2403.08321) | 2024.03 | 高斯溅射用于多任务机器人操控 | [arXiv](https://arxiv.org/abs/2403.08321) |
| [AdaWorld](https://arxiv.org/abs/2503.18938) | 2025.03 | 带潜在动作的可适应世界模型 | [arXiv](https://arxiv.org/abs/2503.18938) |
| [Humanoid World Models](https://arxiv.org/abs/2506.01182) | 2025.06 | 开放世界人形机器人基础模型 | [arXiv](https://arxiv.org/abs/2506.01182) |
| [GWM](https://arxiv.org/abs/2508.17600) | ICCV 2025 | 可扩展高斯世界模型用于操控 | [arXiv](https://arxiv.org/abs/2508.17600) |
| [GigaBrain-0](https://arxiv.org/abs/2510.19430) | 2025.10 | 世界模型驱动的 VLA 策略学习 | [arXiv](https://arxiv.org/abs/2510.19430) |
| [PointWorld](https://arxiv.org/abs/2601.03782) | 2026.01 | 3D 点云世界模型用于真实世界机器人操控 | [arXiv](https://arxiv.org/abs/2601.03782) |
| [DreamDojo](https://arxiv.org/abs/2602.06949) | 2026.02 | 从大规模人类视频学习通用机器人世界模型 | [arXiv](https://arxiv.org/abs/2602.06949) |
| [RWM-U](https://arxiv.org/abs/2504.16680) | 2025.04 | 不确定性感知世界模型，真实四足/人形部署 | [arXiv](https://arxiv.org/abs/2504.16680) |
| [π₀](https://arxiv.org/abs/2410.24164) | RSS 2025 | Flow Matching VLA 基础模型，覆盖多种具身形态 | [arXiv](https://arxiv.org/abs/2410.24164) |
| [OpenVLA](https://arxiv.org/abs/2406.09246) | 2024.06 | 开源 7B VLA，7× 更少参数超越 RT-2-X | [arXiv](https://arxiv.org/abs/2406.09246) |

### 7.5 方向小结

| 特征 | 描述 |
|------|------|
| **优势** | 直接服务机器人部署、VLA+WM 融合趋势不可逆、互联网视频可作为免费训练数据 |
| **局限** | 长时域误差累积、实时推理（100Hz+）仍需攻克、跨形态迁移困难 |
| **趋势** | DreamZero 和 World-Gymnast 标志着"在世界模型中训练策略"从理论走向实践；3D 高斯溅射作为物理世界表示正在兴起 |
| **代表方法** | DreamZero、FLARE、World-Gymnast、UWM、V-JEPA 2-AC、LAPA |
