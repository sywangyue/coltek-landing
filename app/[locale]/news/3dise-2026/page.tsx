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
      ? 'XGRIDS 以铂金合作伙伴身份亮相 3DISE 2026，发布 Lixel K2 | Sunova Innovation'
      : 'XGRIDS Launched Lixel K2 as Platinum Partner at 3DISE 2026 | Sunova Innovation',
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
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
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
        XGRIDS 以铂金合作伙伴身份亮相 3DISE 2026，正式发布 Lixel K2
      </h1>
      <p className="text-foreground-muted leading-relaxed mb-4">
        再度回归 <strong>3DISE 2026</strong>，XGRIDS 今年以<strong>铂金合作伙伴</strong>身份参展——这是欧洲领先的实景捕捉与空间计算行业盛会。XGRIDS 持续引领空间智能生态系统的创新发展。
      </p>
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/stage-spatial.jpg" alt="XGRIDS 3DISE 2026 Spatial Intelligence 演讲现场" width={800} height={500} className="w-full object-cover" />
      </div>
      <p className="text-foreground-muted leading-relaxed mb-4">
        在本届展会上，<strong>XGRIDS 荣耀发布 Lixel K2 的全球首次公开亮相</strong>——这是一款轻量化、高度集成的空间扫描仪，具备实时彩色化点云、内置 RTK 及工程级精度，同时保持极具竞争力的价格定位。
      </p>
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/lixel-k2-launch.jpg" alt="Lixel K2 全球首发亮相 3DISE 2026" width={800} height={500} className="w-full object-cover" />
      </div>
      <p className="text-foreground-muted leading-relaxed mb-4">
        作为一款强大的移动扫描仪，Lixel K2 能够提供精准、清晰的空间数据，无缝融入多种项目工作流：工程测量、文化遗产保护、库存量测算、房产记录、VR/AR、BIM & AEC 以及基础设施巡检。
      </p>
      <p className="text-foreground-muted leading-relaxed mb-4">
        依托完整的端到端软件生态，<strong>用户可轻松获取点云、轻量级 3D 高斯泼溅模型、高分辨率影像及三维网格。</strong>
      </p>
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/lixel-k2-booth.jpg" alt="XGRIDS 展台展示 Lixel K2 实物" width={800} height={500} className="w-full object-cover" />
      </div>
      <p className="text-foreground-muted leading-relaxed mb-4">
        此外，XGRIDS 同步宣布推出 <strong>LixelStudio 4.0</strong> 最新更新版本，带来一系列重要升级，将点云处理能力推向全新高度。本次更新引入了更精准的对齐与水平校正，显著提升空间精度；通过降噪与减少伪影，点云更加纯净；色彩准确性与一致性大幅增强，呈现更真实的视觉效果。网格重建更加稳定可靠，整体处理流程也经过重新设计，更加直观高效——帮助专业用户更快速地从扫描数据生成最终成果。
      </p>
      <p className="text-foreground-muted leading-relaxed mb-8">
        XGRIDS 持续拓展空间智能的技术边界。每一个新里程碑，都体现了 XGRIDS 让高精度空间扫描更强大、更可靠、更易普及的承诺。<strong>随着测量、建筑、媒体与沉浸式体验等行业对更丰富空间数据的需求持续增长，XGRIDS 已做好迎接未来的充分准备。</strong>
      </p>
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/stage-audience.jpg" alt="3DISE 2026 现场观众" width={800} height={500} className="w-full object-cover" />
      </div>
    </article>
  );
}

function ArticleEn() {
  return (
    <article className="max-w-none">
      <h1 className="font-display text-3xl font-bold text-foreground leading-tight mb-8">
        XGRIDS Launched Lixel K2 as Platinum Partner at 3DISE 2026
      </h1>
      <p className="text-foreground-muted leading-relaxed mb-4">
        Returning to <strong>3DISE 2026</strong>, XGRIDS steps up as <strong>Platinum Partner</strong> this year at European leading event for reality capture and spatial computing. XGRIDS continues to drive innovation in the spatial intelligence ecosystem.
      </p>
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/stage-spatial.jpg" alt="XGRIDS 3DISE 2026 Spatial Intelligence keynote" width={800} height={500} className="w-full object-cover" />
      </div>
      <p className="text-foreground-muted leading-relaxed mb-4">
        At this year's show, <strong>XGRIDS is proud to present the first public live debut of Lixel K2</strong>—a lightweight, fully integrated spatial scanner that delivers enhanced point cloud quality with real-time colorization, built-in RTK, and engineering-grade accuracy at an accessible price point.
      </p>
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/lixel-k2-launch.jpg" alt="Lixel K2 world debut at 3DISE 2026" width={800} height={500} className="w-full object-cover" />
      </div>
      <p className="text-foreground-muted leading-relaxed mb-4">
        As a robust mobile scanner, it delivers clean and accurate spatial data for seamless integrations with diverse project workflows: engineering surveying, cultural heritage, stockpile volumetrics, real estate documentation, VR/AR, BIM & AEC and infrastructure inspection.
      </p>
      <p className="text-foreground-muted leading-relaxed mb-4">
        By a complete end-to-end software ecosystem, <strong>users can easily get point clouds, lightweight 3D Gaussian Splatting, high-resolution imagery and 3D meshes.</strong>
      </p>
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/lixel-k2-booth.jpg" alt="XGRIDS booth displaying Lixel K2 at 3DISE 2026" width={800} height={500} className="w-full object-cover" />
      </div>
      <p className="text-foreground-muted leading-relaxed mb-4">
        Additionally, XGRIDS is excited to announce the latest update to <strong>LixelStudio 4.0</strong>, bringing a host of refinements that push point cloud processing to new heights. This release introduces improved alignment and leveling for greater spatial precision, alongside significantly cleaner point clouds achieved through reduced noise and minimized artifacts. Users will also benefit from enhanced color accuracy and consistency, delivering truer-to-life visual results. Mesh reconstruction has been made more stable and reliable, while the overall processing pipeline has been redesigned to feel more intuitive and efficient — helping professionals move from scan to output faster than ever before.
      </p>
      <p className="text-foreground-muted leading-relaxed mb-8">
        XGRIDS continues to advance the frontier of spatial intelligence. Each new milestone reflects XGRIDS's commitment to making high-precision spatial scanning more capable, more reliable, and more accessible than ever. <strong>As industries from surveying and construction to media and immersive experience continue to demand richer spatial data, XGRIDS stands ready to meet that future.</strong>
      </p>
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/3dise-2026/stage-audience.jpg" alt="3DISE 2026 audience" width={800} height={500} className="w-full object-cover" />
      </div>
    </article>
  );
}
