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
      ? 'XGRIDS 携 Lixel K2 亮相 3DISE 2026，荣升铂金合作伙伴 | Coltek'
      : 'XGRIDS Launches Lixel K2 as Platinum Partner at 3DISE 2026 | Coltek',
  };
}

export default async function DISE2026Page({ params }: Props) {
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
            <span className="text-xs text-foreground-muted">2026-05-05</span>
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
        XGRIDS 携 Lixel K2 亮相 3DISE 2026，荣升铂金合作伙伴
      </h1>

      <p className="text-foreground-muted leading-relaxed mb-4">
        5 月 5 日至 6 日，XGRIDS 再度亮相欧洲领先的现实捕捉与空间计算盛会——<strong>3DISE 2026</strong>，并于今年正式升级为<strong>铂金合作伙伴</strong>，持续深耕空间智能生态的创新发展。
      </p>

      {/* 图片1：3DISE 演讲台 — Spatial Intelligence */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/3dise-stage-spatial-intelligence.jpg"
          alt="XGRIDS 在 3DISE 2026 演讲台上演示空间智能"
          width={800} height={600} className="w-full object-cover"
        />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        Lixel K2 全球公开首秀
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        本届展会上，<strong>XGRIDS 正式发布 Lixel K2 的全球公开首秀</strong>——这是一款轻量化、完全集成的空间扫描仪，具备实时彩色点云、内置 RTK 定位与工程级精度，以极具竞争力的价格实现了专业级现实捕捉。
      </p>

      {/* 图片2：演讲台 Lixel K2 发布 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/3dise-stage-lixel-k2-launch.jpg"
          alt="XGRIDS 在 3DISE 2026 正式发布 Lixel K2"
          width={800} height={600} className="w-full object-cover"
        />
      </div>

      {/* 图片3：展台 K2 实物 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/3dise-booth-k2-display.jpg"
          alt="3DISE 2026 展台上的 Lixel K2 实物展示"
          width={800} height={1067} className="w-full object-cover"
        />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        一机多能：完整的端到端软件生态
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        作为强大的扫描解决方案，<strong>Lixel K2</strong> 能够为多样化的工程工作流提供精准、整洁的空间数据，覆盖工程测量、文化遗产保护、料堆体积测量、不动产记录、VR/AR、BIM&AEC 以及基础设施检测等场景。借助完整的端到端软件生态，<strong>用户可轻松获得点云、轻量化三维高斯泼溅（3DGS）、高分辨率影像以及三维网格数据。</strong>
      </p>

      {/* 图片4：Point Cloud / Mesh / 3DGS 对比 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/k2-output-pointcloud-mesh-3dgs.jpg"
          alt="Lixel K2 输出成果：点云、实时点云、网格与 3DGS 对比"
          width={800} height={438} className="w-full object-cover"
        />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        轻如羽翼，专业无界
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        这款轻量化空间扫描仪专为将专业级现实捕捉融入日常工作流而生。重量不足 1 kg，K2 将<strong>实时彩色点云、内置 RTK 定位与工程级精度</strong>集于一身，打造成一款紧凑、随时可用的外业设备。扫描过程中的即时视觉反馈，配合从采集到交付的完整软件生态，大幅缩短作业周期，同时显著提升现场作业的可靠性。
      </p>

      {/* GIF：手持 K2 工业场景扫描 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <img
          src="/images/news/3dise-2026/k2-handheld-scanning.gif"
          alt="手持 Lixel K2 在工业场景中进行扫描"
          className="w-full object-cover"
        />
      </div>

      {/* 图片6：工程师在建筑工地使用 K2 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/k2-construction-site.png"
          alt="工程师手持 Lixel K2 在建筑工地进行扫描"
          width={800} height={448} className="w-full object-cover"
        />
      </div>

      {/* 图片17：K2 室外建筑扫描 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/k2-outdoor-scanning.jpg"
          alt="用户手持 Lixel K2 在彩色建筑外进行室外扫描"
          width={800} height={450} className="w-full object-cover"
        />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        LixelStudio 4.0：点云处理再上新高度
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        与此同时，XGRIDS 还发布了 <strong>LixelStudio 4.0</strong> 的最新更新，带来一系列全面提升，将点云处理能力推向新的高度。此次更新重点包括：更精准的对齐与水平校准、大幅减少噪点与伪影带来的更洁净点云，以及更高精度、更一致的色彩还原效果。网格重建更加稳定可靠，整体处理流程也经过全面优化，更加直观高效——帮助专业用户从扫描到成果输出的速度大幅提升。
      </p>

      <h3 className="font-semibold text-foreground mt-8 mb-4">
        真实色彩还原：色彩精度与一致性全面提升
      </h3>

      <div className="grid grid-cols-3 gap-4 my-6">
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls36-color-pointcloud.png" alt="LS 3.6 色彩点云" width={400} height={224} className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 3.6</p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls40-color-pointcloud.png" alt="LS 4.0 色彩点云" width={400} height={221} className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 4.0</p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/k2-fisheye-original.png" alt="原始影像" width={400} height={315} className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">原始影像</p>
        </div>
      </div>

      <h3 className="font-semibold text-foreground mt-8 mb-4">
        更高空间精度：优化对齐与标定功能
      </h3>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="rounded-xl overflow-hidden">
          <img src="/images/news/3dise-2026/ls36-alignment.gif" alt="LS 3.6 对齐效果" className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 3.6</p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src="/images/news/3dise-2026/ls40-alignment.gif" alt="LS 4.0 对齐效果" className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 4.0</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls40-accuracy-012-vs-03.png" alt="对齐精度对比 0.012° vs 0.03°" width={505} height={466} className="w-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls40-accuracy-03-vs-05.png" alt="对齐精度对比 0.03° vs 0.05°" width={508} height={480} className="w-full object-cover" />
        </div>
      </div>

      <h3 className="font-semibold text-foreground mt-8 mb-4">
        更洁净点云：减少噪点与伪影
      </h3>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls36-glass-pointcloud.png" alt="LS 3.6 玻璃场景点云" width={944} height={535} className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 3.6（玻璃）</p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls40-glass-pointcloud.png" alt="LS 4.0 玻璃场景点云" width={1001} height={537} className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 4.0（玻璃）</p>
        </div>
      </div>

      {/* 图片16：LS 3.6 vs LS 4.0 玻璃对比 GIF */}
      <div className="my-8 rounded-xl overflow-hidden">
        <img
          src="/images/news/3dise-2026/ls36-vs-ls40-glass-comparison.gif"
          alt="LS 3.6 与 LS 4.0 玻璃场景点云效果对比"
          className="w-full object-cover"
        />
        <p className="text-xs text-center text-foreground-muted mt-2">对比</p>
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        持续引领空间智能前沿
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-8">
        XGRIDS 持续推动空间智能的边界向前延伸。每一个新的里程碑，都彰显着 XGRIDS 让高精度空间扫描更强大、更可靠、更普及的坚定承诺。<strong>随着测量、建筑、媒体与沉浸式体验等行业对更丰富空间数据的需求持续增长，XGRIDS 已做好迎接未来的充分准备。</strong>
      </p>

    </article>
  );
}

function ArticleEn() {
  return (
    <article className="max-w-none">

      <h1 className="font-display text-3xl font-bold text-foreground leading-tight mb-8">
        XGRIDS Launches Lixel K2 as Platinum Partner at 3DISE 2026
      </h1>

      <p className="text-foreground-muted leading-relaxed mb-4">
        Returning to <strong>3DISE 2026</strong> on May 5th and 6th, XGRIDS steps up as <strong>Platinum Partner</strong> this year at Europe's leading event for reality capture and spatial computing. XGRIDS continues to drive innovation in the spatial intelligence ecosystem.
      </p>

      {/* Image 1: 3DISE stage — Spatial Intelligence */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/3dise-stage-spatial-intelligence.jpg"
          alt="XGRIDS presenting Spatial Intelligence at 3DISE 2026"
          width={800} height={600} className="w-full object-cover"
        />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        Lixel K2: World Public Live Debut
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        At this year's show, <strong>XGRIDS is proud to present the first public live debut of Lixel K2</strong>—a lightweight, fully integrated spatial scanner that delivers enhanced point cloud quality with real-time colorization, built-in RTK, and engineering-grade accuracy at an accessible price point.
      </p>

      {/* Image 2: Stage — Lixel K2 launch */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/3dise-stage-lixel-k2-launch.jpg"
          alt="XGRIDS officially launches Lixel K2 at 3DISE 2026"
          width={800} height={600} className="w-full object-cover"
        />
      </div>

      {/* Image 3: Booth K2 physical display */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/3dise-booth-k2-display.jpg"
          alt="Lixel K2 on display at the XGRIDS booth at 3DISE 2026"
          width={800} height={1067} className="w-full object-cover"
        />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        A Complete End-to-End Software Ecosystem
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        As a robust scanning solution, <strong>Lixel K2</strong> delivers clean and accurate spatial data for seamless integration with diverse project workflows: engineering surveying, cultural heritage, stockpile volumetrics, real estate documentation, VR/AR, BIM&AEC and infrastructure inspection. By a complete end-to-end software ecosystem, <strong>users can easily get point clouds, lightweight 3D Gaussian Splatting, high-resolution imagery and 3D meshes.</strong>
      </p>

      {/* Image 4: Point Cloud / Mesh / 3DGS comparison */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/k2-output-pointcloud-mesh-3dgs.jpg"
          alt="Lixel K2 output: Point Cloud, Real-time Point Cloud, Mesh and 3DGS"
          width={800} height={438} className="w-full object-cover"
        />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        Professional-Grade Scanning in Your Hands
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        The lightweight spatial scanner K2 is designed to bring professional-grade reality capture into everyday workflows. Weighing under 1 kg, K2 combines <strong>real-time colourised point clouds, built-in RTK positioning, and engineering-level accuracy in a compact, field-ready device.</strong> With instant visual feedback during scanning and a complete software ecosystem from capture to delivery, K2 significantly reduces turnaround time while improving reliability on site.
      </p>

      {/* GIF: Handheld K2 industrial scanning */}
      <div className="my-8 rounded-xl overflow-hidden">
        <img
          src="/images/news/3dise-2026/k2-handheld-scanning.gif"
          alt="Handheld Lixel K2 scanning in an industrial environment"
          className="w-full object-cover"
        />
      </div>

      {/* Image 6: Engineer on construction site */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/k2-construction-site.png"
          alt="Engineer using Lixel K2 on a construction site"
          width={800} height={448} className="w-full object-cover"
        />
      </div>

      {/* Image 17: K2 outdoor building scan */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src="/images/news/3dise-2026/k2-outdoor-scanning.jpg"
          alt="User holding Lixel K2 scanning a colorful building outdoors"
          width={800} height={450} className="w-full object-cover"
        />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        LixelStudio 4.0: Point Cloud Processing Reaches New Heights
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        Furthermore, XGRIDS is excited to announce the latest update to <strong>LixelStudio 4.0</strong>, bringing a host of refinements that push point cloud processing to new heights. This release introduces improved alignment and leveling for greater spatial precision, alongside significantly cleaner point clouds achieved through reduced noise and minimized artifacts. Users will also benefit from enhanced color accuracy and consistency, delivering truer-to-life visual results. Mesh reconstruction has been made more stable and reliable, while the overall processing pipeline has been redesigned to feel more intuitive and efficient—helping professionals move from scan to output faster than ever before.
      </p>

      <h3 className="font-semibold text-foreground mt-8 mb-4">
        True-to-life visual results: Enhanced color accuracy and consistency
      </h3>

      <div className="grid grid-cols-3 gap-4 my-6">
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls36-color-pointcloud.png" alt="LS 3.6 color point cloud" width={400} height={224} className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 3.6</p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls40-color-pointcloud.png" alt="LS 4.0 color point cloud" width={400} height={221} className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 4.0</p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/k2-fisheye-original.png" alt="Original image" width={400} height={315} className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">Original Image</p>
        </div>
      </div>

      <h3 className="font-semibold text-foreground mt-8 mb-4">
        Greater spatial accuracy: optimised alignment and calibration functions
      </h3>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="rounded-xl overflow-hidden">
          <img src="/images/news/3dise-2026/ls36-alignment.gif" alt="LS 3.6 alignment" className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 3.6</p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src="/images/news/3dise-2026/ls40-alignment.gif" alt="LS 4.0 alignment" className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 4.0</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls40-accuracy-012-vs-03.png" alt="Alignment accuracy comparison 0.012° vs 0.03°" width={505} height={466} className="w-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls40-accuracy-03-vs-05.png" alt="Alignment accuracy comparison 0.03° vs 0.05°" width={508} height={480} className="w-full object-cover" />
        </div>
      </div>

      <h3 className="font-semibold text-foreground mt-8 mb-4">
        Clearer point clouds: reduced noise and fewer artefacts
      </h3>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls36-glass-pointcloud.png" alt="LS 3.6 glass scene point cloud" width={944} height={535} className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 3.6 (glass)</p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/3dise-2026/ls40-glass-pointcloud.png" alt="LS 4.0 glass scene point cloud" width={1001} height={537} className="w-full object-cover" />
          <p className="text-xs text-center text-foreground-muted mt-2">LS 4.0 (glass)</p>
        </div>
      </div>

      {/* Image 16: LS 3.6 vs LS 4.0 glass comparison GIF */}
      <div className="my-8 rounded-xl overflow-hidden">
        <img
          src="/images/news/3dise-2026/ls36-vs-ls40-glass-comparison.gif"
          alt="LS 3.6 vs LS 4.0 glass scene point cloud comparison"
          className="w-full object-cover"
        />
        <p className="text-xs text-center text-foreground-muted mt-2">Comparison</p>
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        Advancing the Frontier of Spatial Intelligence
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-8">
        XGRIDS continues to advance the frontier of spatial intelligence. Each new milestone reflects XGRIDS's commitment to making high-precision spatial scanning more capable, more reliable, and more accessible than ever. <strong>As industries from surveying and construction to media and immersive experience continue to demand richer spatial data, XGRIDS stands ready to meet that future.</strong>
      </p>

    </article>
  );
}
