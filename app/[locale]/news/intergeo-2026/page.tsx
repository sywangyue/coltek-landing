import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? 'INTERGEO 2026：其域创新发布 Lixel L3，推动实景三维采集迈向新阶段 | Sunova Innovation'
      : 'INTERGEO 2026: XGRIDS Unveils Lixel L3, Advancing the Future of Reality Capture | Sunova Innovation',
  };
}

export default async function Intergeo2026Page({ params }: Props) {
  const { locale } = await params;
  const isZh = locale === 'zh';

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white pt-24 pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            {isZh ? '返回新闻' : 'Back to News'}
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
              {isZh ? '活动' : 'Event'}
            </span>
            <span className="text-xs text-foreground-muted">2026-10-22</span>
          </div>

          {isZh ? <ArticleZh /> : <ArticleEn />}

        </div>
      </div>
      <Footer />
    </main>
  );
}

function ArticleZh() {
  return (
    <article className="max-w-none">

      <h1 className="font-display text-3xl font-bold text-foreground leading-tight mb-8">
        INTERGEO 2026：其域创新发布 Lixel L3，推动实景三维采集迈向新阶段
      </h1>

      <p className="text-foreground-muted leading-relaxed mb-6">
        在全球地理空间行业最具影响力的国际盛会之一 INTERGEO 上，其域创新正式推出旗舰级扫描仪 <strong>Lixel L3</strong>，将<strong>经过验证的 5 mm 相对精度、照片级三维重建与一体化空间采集工作流</strong>集于一身。
      </p>

      {/* 图片1：L3 展台 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/intergeo-booth-lixel-l3.jpg" alt="INTERGEO 2026 其域创新展台上的 Lixel L3" width={800} height={600} className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        空间采集的重要一步
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-6">
        2026 年 9 月 15 日至 17 日，INTERGEO 在德国慕尼黑举行，汇聚了全球地理空间领域的专业人士、技术提供商与决策者。本届展会共有<strong>超过 530 家参展商</strong>，观众来自 <strong>119 个国家</strong>，为探讨塑造测绘、地理信息与数字化转型未来的技术提供了重要平台。
      </p>

      {/* 图片2：展台人流 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/intergeo-booth-visitors.jpg" alt="INTERGEO 2026 其域创新展台现场" width={800} height={600} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        在本届展会的重要发布中，其域创新推出了旗舰级高精度空间扫描仪 <strong>Lixel L3</strong>。L3 旨在弥合精确测量与照片级数字重建之间的鸿沟，标志着物理环境的采集、处理并转化为可用数字资产的方式迈出了重要一步。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        对于面对复杂场地和高要求项目的专业人士而言，关注点已不再只是采集更多数据，而是<strong>高效获取可靠的空间信息，并将其转化为支撑实际决策的成果</strong>。
      </p>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-6">
        Lixel L3：精度与照片级真实感兼得
      </h2>

      {/* 图片3：L3 主视觉 — 标题下方，文字之前 */}
      <div className="my-6 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/lixel-l3-key-visual.jpg" alt="Lixel L3 — Accuracy meets Photorealism" width={800} height={450} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        Lixel L3 的核心是<strong>经过验证的 5 mm 相对精度</strong>，该指标已在有文档记录的测试中与实测参考数据进行对比验证。配合<strong>约 2.5 cm 的实时绝对精度</strong>，系统可满足对空间数据可靠性要求极高的应用场景。
      </p>

      <p className="text-foreground font-semibold leading-relaxed mb-4">
        但精度只是其中一部分。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        L3 将<strong>高精度 LiDAR、真彩视觉系统、RTK 定位与内置显示屏</strong>集成于一台设备之中。通过融合几何、色彩与定位信息，用户在采集物理环境时，既能获得精确的结构细节，也能保留丰富的视觉信息。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        其成像系统采用 <strong>1/1.3 英寸 CMOS 传感器与 4K HDR 成像</strong>，有助于保留色彩与表面细节，让数字重建成果更易辨识、更具实用价值。
      </p>

      {/* GIF1：3DGS 街景 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <img src="/images/news/intergeo-2026/lixel-l3-3dgs-street.gif" alt="Lixel L3 采集的街景三维重建" className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        由此形成的采集工作流十分灵活，<strong>一次数据采集即可生成多种三维成果</strong>，包括：
      </p>

      <ul className="list-disc pl-5 space-y-2 text-foreground-muted leading-relaxed mb-6">
        <li><strong>真彩点云</strong>：用于精细的空间分析与测量；</li>
        <li><strong>三维 Mesh 模型</strong>：用于几何表达与后续处理；</li>
        <li><strong>照片级 3D 高斯泼溅（3DGS）模型</strong>：用于沉浸式可视化与数字内容应用。</li>
      </ul>

      <p className="text-foreground-muted leading-relaxed mb-6">
        这一组合将两项传统上需要不同方案才能满足的需求合二为一：<strong>技术工作所需的几何可靠性，以及真实呈现空间所需的视觉丰富度</strong>。
      </p>

      {/* 图片4：精密传感讲解 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/lixel-l3-precision-sensing.jpg" alt="其域创新展台讲解 Lixel L3 一体化精密传感" width={800} height={600} className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        从现场采集到实际成果
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        扫描系统的价值，不仅取决于数据质量，还取决于数据能否被高效采集并投入使用。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        Lixel L3 正是围绕完整工作流而设计。在典型条件下，它可在 <strong>10 分钟内完成约 100 m² 的采集</strong>，生成高精度空间数据与照片级三维模型。内置显示屏可提供现场反馈，而<strong>基于 SLAM 的跟踪、视觉辅助定位与调平优化</strong>则有助于在长时间扫描中保持稳定、控制累积漂移。
      </p>

      {/* GIF2：点云扫描 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <img src="/images/news/intergeo-2026/lixel-l3-pointcloud-scan.gif" alt="Lixel L3 实时点云采集" className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-6">
        L3 不再将采集、重建与可视化视为彼此割裂的任务，而是将它们整合进一个统一的流程。对于管理大型建筑、复杂室内空间或大面积既有场地的专业人士而言，这种整合有助于<strong>减少从采集空间到完成数字化表达之间的阻力</strong>。
      </p>

      {/* GIF3：3DGS 小镇 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <img src="/images/news/intergeo-2026/lixel-l3-3dgs-town.gif" alt="Lixel L3 采集的小镇 3DGS 模型" className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        拓展实景三维采集的可能性
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        Lixel L3 的能力适用于越来越多的专业应用场景。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        在<strong>测绘与制图</strong>领域，可靠的空间数据是记录现状、理解复杂环境的基础。在<strong>建筑、工程与施工（AEC）</strong>领域，精细的数字化表达可支持改造项目、协同工作以及建筑信息模型（BIM）的构建。在<strong>数字孪生与三维可视化</strong>领域，照片级模型能帮助团队更直观地沟通空间信息，并以数字方式探索环境。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        3D 高斯泼溅日益重要的作用，又为此增添了新的维度。通过保留真实环境的视觉特征，3DGS 让采集到的空间不再局限于传统的测量与建模，而是延伸至沉浸式体验与数字内容创作。<strong>一体化采集方案，正日益成为记录和理解物理环境的重要方式。</strong>
      </p>

      {/* 图片5：Scan-to-BIM 展示墙 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/xgrids-scan-to-bim-booth.jpg" alt="其域创新 Scan-to-BIM 工作流展示" width={800} height={450} className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        让空间创新更贴近欧洲专业用户
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        对于正在评估新采集方案的专业人士而言，技术参数只是决策的一部分。了解系统如何融入现有工作流、能交付哪些成果、如何满足具体项目需求，同样重要。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        Sunova 致力于帮助欧洲客户挖掘其域创新解决方案的实际潜力，<strong>从空间数据采集、三维重建，到让这些数字资产融入日常专业工作的完整工作流</strong>。
      </p>

      {/* 图片6：现场演示 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/sunova-live-demo.jpg" alt="Sunova 团队在 INTERGEO 2026 现场演示" width={800} height={600} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-6">
        INTERGEO 2026 期间，Sunova 团队通过<strong>现场演示与面对面交流</strong>，欢迎观众体验其域创新最新的空间采集技术。展会为现场展示 Lixel L3 的实际表现、与地理空间行业专业人士交流见解，以及探讨先进的实景三维采集方案如何满足真实项目需求，提供了宝贵的机会。
      </p>

      {/* 图片7：团队合影 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/sunova-xgrids-team.jpg" alt="Sunova 与其域创新团队在 INTERGEO 2026 展台合影" width={800} height={600} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-6">
        这些交流进一步印证了一点：技术需要走出参数表、进入实际工作流，帮助专业人士不仅了解<strong>什么是可能的</strong>，更了解<strong>如何将其应用到自己的工作中</strong>。
      </p>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        让现实更有用
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        INTERGEO 2026 清晰地展现了一个正在超越单纯数据采集的行业。随着人们对精度、视觉质量与工作流效率的期望不断提升，实景三维采集的下一阶段，将取决于这些能力能否高效协同。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        Lixel L3 正体现了这一方向：<strong>以更高的精度采集物理环境，以更丰富的视觉细节重建空间，并让由此产生的数据服务于更广泛的应用</strong>。
      </p>

      <p className="text-foreground font-semibold leading-relaxed mb-4">
        实景三维采集的未来，不只是更精准地还原现实，更是让现实变得更有用。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-8">
        精彩不止于此，我们的对话仍将继续。诚挚邀请您提前锁定日程，明年与我们相约法兰克福 <strong>INTERGEO 2027</strong>，共同探讨技术创新，携手探索新的商业机遇！
      </p>

    </article>
  );
}

function ArticleEn() {
  return (
    <article className="max-w-none">

      <h1 className="font-display text-3xl font-bold text-foreground leading-tight mb-8">
        INTERGEO 2026: XGRIDS Unveils Lixel L3, Advancing the Future of Reality Capture
      </h1>

      <p className="text-foreground-muted leading-relaxed mb-6">
        At one of the geospatial industry&apos;s leading international events, XGRIDS introduced its flagship <strong>Lixel L3</strong> scanner, bringing together <strong>validated 5 mm relative accuracy, photorealistic 3D reconstruction and an integrated spatial capture workflow.</strong>
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/intergeo-booth-lixel-l3.jpg" alt="Lixel L3 at the XGRIDS booth, INTERGEO 2026" width={800} height={600} className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        A Major Step Forward in Spatial Capture
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-6">
        Held in Munich from 15–17 September 2026, INTERGEO brought together professionals, technology providers and decision-makers from across the global geospatial community. With <strong>more than 530 exhibitors</strong> and visitors from <strong>119 countries</strong>, the event provided an important platform for exploring the technologies shaping the future of surveying, geoinformation and digital transformation.
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/intergeo-booth-visitors.jpg" alt="Visitors at the XGRIDS booth, INTERGEO 2026" width={800} height={600} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        Among this year&apos;s key developments, XGRIDS unveiled the <strong>Lixel L3</strong>, its flagship high-accuracy spatial scanner. Designed to bridge the gap between precise measurement and photorealistic digital reconstruction, the L3 represents a significant step forward in how physical environments can be captured, processed and transformed into usable digital assets.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        For professionals working with complex sites and demanding projects, the focus is no longer simply on capturing more data. It is about <strong>obtaining reliable spatial information efficiently and turning it into outputs that support real-world decisions.</strong>
      </p>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-6">
        Lixel L3: Precision Meets Photorealism
      </h2>

      <div className="my-6 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/lixel-l3-key-visual.jpg" alt="Lixel L3 — Accuracy meets Photorealism" width={800} height={450} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        At the heart of the Lixel L3 is its <strong>validated 5 mm relative accuracy</strong>, demonstrated against measured reference data in a documented test. Combined with <strong>approximately 2.5 cm real-time absolute accuracy</strong>, the system is designed to support applications where dependable spatial data is essential.
      </p>

      <p className="text-foreground font-semibold leading-relaxed mb-4">
        But accuracy is only part of the story.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        The L3 integrates <strong>high-accuracy LiDAR, a true-colour vision system, RTK positioning and a built-in display</strong> into a single device. By bringing geometry, colour and positioning together, it enables users to capture physical environments with both precise structural detail and rich visual information.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        Its imaging system combines a <strong>1/1.3-inch CMOS sensor with 4K HDR imaging</strong>, helping preserve the colours and surface details that make digital reconstructions more recognisable and useful.
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <img src="/images/news/intergeo-2026/lixel-l3-3dgs-street.gif" alt="Street scene reconstructed with Lixel L3" className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        The result is a versatile capture workflow capable of <strong>producing multiple forms of 3D output from a single data collection process</strong>, including:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-foreground-muted leading-relaxed mb-6">
        <li><strong>True-colour point clouds</strong> for detailed spatial analysis and measurement.</li>
        <li><strong>3D mesh models</strong> for geometric representation and further processing.</li>
        <li><strong>Photorealistic 3D Gaussian Splatting (3DGS) models</strong> for immersive visualisation and digital content applications.</li>
      </ul>

      <p className="text-foreground-muted leading-relaxed mb-6">
        This combination brings together two requirements that have traditionally demanded different approaches: <strong>the geometric reliability needed for technical work and the visual richness needed to communicate a space convincingly.</strong>
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/lixel-l3-precision-sensing.jpg" alt="Lixel L3 integrated precision sensing presented at the XGRIDS booth" width={800} height={600} className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        From Field Capture to Practical Results
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        The value of a scanning system depends not only on the quality of its data, but also on how efficiently that data can be collected and put to use.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        The Lixel L3 is designed with this broader workflow in mind. Under typical conditions, it can cover <strong>approximately 100 m² in 10 minutes</strong>, producing high-accuracy spatial data and photorealistic 3D models. Its integrated display provides on-site feedback, while <strong>SLAM-based tracking, vision-assisted localisation and levelling optimisation</strong> help maintain scan stability and manage accumulated drift during longer sessions.
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <img src="/images/news/intergeo-2026/lixel-l3-pointcloud-scan.gif" alt="Real-time point cloud capture with Lixel L3" className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-6">
        Rather than treating acquisition, reconstruction and visualisation as separate tasks, the L3 brings them closer together within a unified process. For professionals managing large buildings, complex interiors or extensive existing sites, this integration can help <strong>reduce friction between capturing a space and preparing its digital representation.</strong>
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <img src="/images/news/intergeo-2026/lixel-l3-3dgs-town.gif" alt="3DGS model of a town captured with Lixel L3" className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        Expanding the Possibilities of Reality Capture
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        The Lixel L3&apos;s capabilities are relevant across a growing range of professional applications.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        In <strong>surveying and mapping</strong>, reliable spatial data provides a foundation for documenting existing conditions and understanding complex environments. In <strong>architecture, engineering and construction (AEC)</strong>, detailed digital representations can support renovation projects, coordination and the development of building information models. In <strong>digital twins and 3D visualisation</strong>, photorealistic models help teams communicate spatial information more intuitively and explore environments digitally.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        The growing role of 3D Gaussian Splatting adds another dimension. By preserving the visual character of real environments, 3DGS makes captured spaces useful beyond conventional measurement and modelling, extending into immersive experiences and digital content creation. <strong>Integrated capture solutions are becoming increasingly important to the way physical environments are documented and understood.</strong>
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/xgrids-scan-to-bim-booth.jpg" alt="XGRIDS Scan-to-BIM workflow display" width={800} height={450} className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        Bringing Spatial Innovation Closer to European Professionals
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        For professionals evaluating new capture solutions, technical specifications are only one part of the decision. Understanding how a system fits into existing workflows, what outputs it can deliver and how it supports specific project requirements is equally important.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        Sunova&apos;s focus is on helping European customers explore the practical potential of XGRIDS solutions, <strong>from spatial data acquisition and 3D reconstruction to the workflows that bring these digital assets into everyday professional use.</strong>
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/sunova-live-demo.jpg" alt="Sunova team giving live demonstrations at INTERGEO 2026" width={800} height={600} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-6">
        Throughout INTERGEO 2026, the Sunova team welcomed visitors to explore XGRIDS&apos; latest spatial capture technologies through <strong>live demonstrations and face-to-face discussions.</strong> The event provided an opportunity to showcase the Lixel L3 in practice, exchange insights with professionals across the geospatial industry and discuss how advanced reality capture solutions can address the needs of real-world projects.
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/intergeo-2026/sunova-xgrids-team.jpg" alt="Sunova and XGRIDS team at the INTERGEO 2026 booth" width={800} height={600} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-6">
        These conversations reinforced the importance of bringing technology beyond specifications and into practical workflows, helping professionals understand not only <strong>what is possible</strong>, but <strong>how it can be applied in their own work.</strong>
      </p>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        Making Reality More Useful
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        INTERGEO 2026 offered a clear view of an industry moving beyond data collection alone. As expectations for accuracy, visual quality and workflow efficiency continue to grow, the next stage of reality capture will depend on how effectively these capabilities work together.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        The Lixel L3 reflects this direction: <strong>capturing physical environments with greater precision, reconstructing them with richer visual detail and making the resulting data available for a wider range of applications.</strong>
      </p>

      <p className="text-foreground font-semibold leading-relaxed mb-4">
        The future of reality capture is not just about capturing reality more accurately, but about making it more useful.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-8">
        The highlights do not end here, and our dialogue continues. You are warmly invited to mark your calendar and join us next year in Frankfurt at <strong>INTERGEO 2027</strong>, to discuss technological innovations and explore new business opportunities side by side!
      </p>

    </article>
  );
}
