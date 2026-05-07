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
      ? 'XGRIDS 携 Lixel K2 亮相 3DISE 2026，荣升白金赞助商 | Sunova Innovation'
      : 'XGRIDS Launches Lixel K2 as Platinum Partner at 3DISE 2026 | Sunova Innovation',
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
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
              {isZh ? '活动' : 'Event'}
            </span>
            <span className="text-xs text-foreground-muted">2026-05-07</span>
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
        XGRIDS 携 Lixel K2 亮相 3DISE 2026，荣升白金赞助商
      </h1>

      <p className="text-foreground-muted leading-relaxed mb-4">
        在今年的 <strong>3DISE 2026</strong> 上，XGRIDS 再度参展并晋升为<strong>白金赞助商</strong>。作为欧洲领先的现实捕捉与空间计算行业盛会，3DISE 汇聚了全球顶尖的技术企业与专业人士。XGRIDS 持续在空间智能生态系统中引领创新。
      </p>

      {/* 图片1：演讲台 Spatial Intelligence */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/stage-spatial.jpg" alt="XGRIDS 在 3DISE 2026 演讲现场" width={800} height={500} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        在本届展会上，<strong>XGRIDS 正式发布 Lixel K2 的全球首次公开亮相</strong>——这是一款轻量化、高度集成的空间扫描仪，具备实时点云着色、内置 RTK 和工程级精度，同时拥有极具竞争力的价格。
      </p>

      {/* 图片2：Lixel K2 发布 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/lixel-k2-launch.jpg" alt="Lixel K2 全球首发" width={800} height={500} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        作为一款稳健的移动扫描仪，Lixel K2 能够采集精准、干净的空间数据，无缝融入多种工程工作流：工程测量、文化遗产保护、库存体积测算、房地产记录、VR/AR、BIM & AEC 以及基础设施巡检。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        依托完整的端到端软件生态系统，<strong>用户可轻松获取点云、轻量级 3D 高斯泼溅、高分辨率影像及 3D 网格模型。</strong>
      </p>

      {/* 图片3：展台产品展示 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/lixel-k2-booth.jpg" alt="XGRIDS 展台 Lixel K2 实物展示" width={800} height={500} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        此外，XGRIDS 同步宣布 <strong>LixelStudio 4.0</strong> 正式更新发布，带来一系列深度优化，将点云处理能力提升至全新高度。本次更新引入了更精准的对齐与水平校准功能，通过有效降噪和减少伪影，实现更干净的点云输出。色彩精度与一致性全面提升，还原更真实的视觉效果。网格重建更加稳定可靠，整体处理流程经过重新设计，操作更加直观高效——帮助专业用户以更快速度完成从扫描到成果输出的全流程。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-8">
        XGRIDS 正持续推动空间智能技术的边界向前延伸。每一个新的里程碑，都是 XGRIDS 致力于让高精度空间扫描更强大、更可靠、更易用的体现。<strong>随着测绘、建筑、媒体与沉浸式体验等行业对更丰富空间数据的需求持续攀升，XGRIDS 已做好充分准备，迎接这一未来。</strong>
      </p>

      {/* 图片4：观众全场 */}
      <div className="mt-4 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/audience.jpg" alt="3DISE 2026 现场观众" width={800} height={500} className="w-full object-cover" />
      </div>

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
        Returning to <strong>3DISE 2026</strong>, XGRIDS steps up as <strong>Platinum Partner</strong> this year at Europe's leading event for reality capture and spatial computing. XGRIDS continues to drive innovation in the spatial intelligence ecosystem.
      </p>

      {/* Image 1: Stage - Spatial Intelligence */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/stage-spatial.jpg" alt="XGRIDS presentation at 3DISE 2026" width={800} height={500} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        At this year's show, <strong>XGRIDS is proud to present the first public live debut of Lixel K2</strong>—a lightweight, fully integrated spatial scanner that delivers enhanced point cloud quality with real-time colorization, built-in RTK, and engineering-grade accuracy at an accessible price point.
      </p>

      {/* Image 2: Lixel K2 launch */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/lixel-k2-launch.jpg" alt="Lixel K2 global debut at 3DISE 2026" width={800} height={500} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        As a robust mobile scanner, it delivers clean and accurate spatial data for seamless integration with diverse project workflows: engineering surveying, cultural heritage, stockpile volumetrics, real estate documentation, VR/AR, BIM & AEC, and infrastructure inspection.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        Through a complete end-to-end software ecosystem, <strong>users can easily get point clouds, lightweight 3D Gaussian Splatting, high-resolution imagery, and 3D meshes.</strong>
      </p>

      {/* Image 3: Booth product display */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/lixel-k2-booth.jpg" alt="Lixel K2 on display at XGRIDS booth" width={800} height={500} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        Additionally, XGRIDS is excited to announce the latest update to <strong>LixelStudio 4.0</strong>, bringing a host of refinements that push point cloud processing to new heights. This release introduces improved alignment and leveling for greater spatial precision, alongside significantly cleaner point clouds achieved through reduced noise and minimized artifacts. Users will also benefit from enhanced color accuracy and consistency, delivering truer-to-life visual results. Mesh reconstruction has been made more stable and reliable, while the overall processing pipeline has been redesigned to feel more intuitive and efficient—helping professionals move from scan to output faster than ever before.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-8">
        XGRIDS continues to advance the frontier of spatial intelligence. Each new milestone reflects XGRIDS's commitment to making high-precision spatial scanning more capable, more reliable, and more accessible than ever. <strong>As industries from surveying and construction to media and immersive experience continue to demand richer spatial data, XGRIDS stands ready to meet that future.</strong>
      </p>

      {/* Image 4: Audience */}
      <div className="mt-4 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/audience.jpg" alt="3DISE 2026 audience" width={800} height={500} className="w-full object-cover" />
      </div>

    </article>
  );
}
