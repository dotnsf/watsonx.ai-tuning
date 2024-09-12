# watsonx.ai - tuning


## Overview

Tuning JSON generator.


## How to estimate tuning cost

- Find CUH for tuning
  - https://jp-tok.dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/wml-plans.html?context=wx#cuh-metering
    - ファウンデーションモデルのチューニングは "NVIDIA A100 80GB CPU" で 2024/Sep/11 時点では  **43 CUH**

- Find CU price per hour in your plan
  - 使っている Watson Machine Learning のプランを参照して、１時間あたりの CUH 価格を調べる
    - Essential Plan の場合、2024/Sep/11 時点では **0.52 USD/Capacity Unit-Hour** または **75.7146 JPY/Capacity Unit-Hour**

- したがって仮にチューニングに１時間必要だったと仮定すると・・・
  - 1 * 0.52 * 43 = 22.36 (USD)
  - 1 * 75.7146 * 43 = 3255.7278 (JPY)


## References

- Cost
  - https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-tuning-studio.html?context=wx&audience=wdp#foundation-model-tuning-costs

- Tuning Studio
  - https://jp-tok.dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-tuning-studio.html?context=wx

- キャパシティー・ユニット時間(CUH)の計量 (watsonx および Watson Machine Learning)
  - https://jp-tok.dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/wml-plans.html?context=wx#cuh-metering

- リソースユニット(RU)の計量
  - https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/wml-plans.html?context=wx&audience=wdp#ru-metering


## Licensing

This code is licensed under MIT.


## Copyright

2024  [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
