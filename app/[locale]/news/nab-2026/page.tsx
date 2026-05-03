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
      ? '全球唯一：灵视 P1 独揽四项 NAB 2026 年度产品大奖 | Coltek'
      : 'World First: PortalCam Wins Four NAB 2026 Product of the Year Awards | Coltek',
  };
}

export default async function NAB2026Page({ params }: Props) {
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
              {isZh ? '产品更新' : 'Product Update'}
            </span>
            <span className="text-xs text-foreground-muted">2026-04-24</span>
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
        全球唯一：其域创新灵视 P1 独揽四项 NAB 2026 年度产品大奖
      </h1>

      <p className="text-foreground-muted leading-relaxed mb-4">
        在全球广播与影视技术领域最具影响力的盛会之一——NAB Show 上，其域创新（XGRIDS）迎来重要里程碑：旗下空间相机<strong>灵视 P1</strong> 荣获四项年度产品（Product of the Year），分别是<strong>智能技术、图形、编辑与视觉特效、摄影设备与远程制作</strong>。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        横跨多个类别的同时获奖，意味着其域创新不仅在单一技术方向上实现突破，更在<strong>影视制作的多个关键环节</strong>中获得行业认可。主办方评价称，其域创新的空间智能技术，是<strong>「影视行业当前最前沿的创新智能技术之一」</strong>，并将对未来影视行业的发展产生深远影响。
      </p>

      {/* 图片1：四个奖杯 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/nab-2026/nab-trophies.jpg" alt="灵视 P1 与四项 NAB 2026 年度产品大奖奖杯" width={800} height={500} className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        四个奖项的背后，是行业范式的转变
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        在全球人工智能竞争格局加速演进的背景下，<strong>空间智能作为连接数字世界与物理世界的关键中枢层</strong>，正受到产业界的广泛关注。以其域创新为代表的空间智能企业，正在这一领域积累形成从技术研发到工业级应用的完整能力，并逐步在国际市场建立起自身的技术影响力。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        NAB Show 一直是全球影视、广播与内容制作技术的风向标。每年，来自世界各地的技术公司、影视机构与创作者齐聚一堂，展示和评选最具突破性的产品与解决方案。<strong>NAB Show 年度产品奖的评审标准历来以严格著称，评判依据不只是技术的先进性，更看重产品对行业实际工作方式的改变能力。</strong>
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        在这样的舞台上斩获四项大奖、脱颖而出，意味着其域创新的空间智能技术不仅具备前沿创新性，更具备<strong>改变行业工作方式的巨大潜力</strong>。
      </p>

      {/* 图片2：NAB颁奖舞台 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/nab-2026/nab-stage.jpg" alt="NAB Show Product of the Year 2026 颁奖典礼现场" width={800} height={450} className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-6">
        灵视 P1：定义真空间相机
      </h2>

      {/* 图片3：PortalCam宣传图 — 标题下方，文字之前 */}
      <div className="my-6 rounded-xl overflow-hidden">
        <Image src="/images/news/nab-2026/portalcam-banner.jpg" alt="XGRIDS PortalCam Wins Product Of the Year in 4 Categories at NAB Show 2026" width={800} height={420} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        长期以来，影视制作依赖高成本、长周期的实景采集与后期重建流程，而空间智能与 3D 高斯技术的出现，正在让<strong>「真实世界数字化」</strong>成为一种更高效、更直接的生产方式。<strong>灵视 P1，正是这一变革的关键入口。</strong>
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        灵视 P1 是其域创新推出的空间相机，能够将真实空间重现为栩栩如生的三维模型。它的核心价值，并不只是「拍摄」，而是通过多目相机与 LiDAR 的融合感知，在移动中完成高质量空间采集，<strong>将现实世界直接转化为可交互、可编辑、可分享的三维数字空间。</strong>配合其域创新的软件 LCC Studio，可对数据进行自动化处理与编辑，大幅降低三维内容生产门槛。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-8">
        这意味着，传统需要多团队协作、数周完成的流程，现在可以在更短时间内完成，并保持更高的真实还原度。
      </p>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        其域创新方案进入影视工作流
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-6">
        空间智能与 3D 高斯技术的出现，意味着从勘景到虚拟制作，从预拍摄到 XR 直播，影视工作流中多个长期依赖人工经验和高成本重建的环节，正在被这套技术逻辑重新定义。在 NAB Show 获奖之前，其域创新的空间智能方案已在多个全球头部影视项目中完成实际验证。
      </p>

      {/* GIF3：手持扫描 — 影视工作流介绍后，狂野时代前 */}
      <div className="my-8 rounded-xl overflow-hidden">
        <img src="/images/news/nab-2026/portacam-scan.gif" alt="手持灵视 P1 进行实景扫描" className="w-full object-cover" />
      </div>

      <div className="border-l-4 border-accent pl-5 mb-6">
        <h3 className="font-semibold text-foreground mb-3">《狂野时代》：前期勘景与虚拟置景一体化</h3>
        <p className="text-foreground-muted leading-relaxed text-sm mb-4">
          在电影《狂野时代》的制作过程中，灵视 P1 被用于<strong>前期勘景与空间数字化采集</strong>。扫描后的场景可直接用于美术置景、灯光规划与运镜模拟。
        </p>
        {/* 图片4：古建筑3DGS */}
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/nab-2026/resurrection-3dgs.jpg" alt="《狂野时代》3DGS 环境重建效果" width={800} height={420} className="w-full object-cover" />
        </div>
      </div>

      <div className="border-l-4 border-accent pl-5 mb-6">
        <h3 className="font-semibold text-foreground mb-3">韩国 SBS 广播电视台：实时 XR 直播</h3>
        <p className="text-foreground-muted leading-relaxed text-sm mb-4">
          韩国广播行业的领军企业 SBS <strong>正式推出其 AIXR Studio，成为首家将 3DGS 和 XR 技术整合到新闻直播制作中的广播公司。</strong>通过和其域创新的合作，利用灵视 P1 和 LCC 3D 高斯解决方案，SBS 能够捕捉真实世界的场景并将其转换为逼真的三维环境，使主播能够在不同的直播场景中无缝切换。
        </p>
        {/* 图片5：SBS XR直播 */}
        <div className="rounded-xl overflow-hidden">
          <img src="/images/news/nab-2026/sbs-xr.jpg" alt="韩国 SBS AIXR Studio XR 直播画面" className="w-full object-cover" />
        </div>
      </div>

      <div className="border-l-4 border-accent pl-5 mb-8">
        <h3 className="font-semibold text-foreground mb-3">与 Apple TV 合作：美剧《诊疗中》创新虚拟拍摄</h3>
        <p className="text-foreground-muted leading-relaxed text-sm">
          在美剧《诊疗中》的制作中，XGRIDS 与 Apple TV 合作虚拟拍摄，提前对拍摄场景进行空间扫描与数字化重建。<strong>场景被直接投射到 LED 屏幕中，演员在虚拟环境前进行实时表演，实现「所见即所得」的拍摄方式，减少后期合成依赖。</strong>
        </p>
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        走向更广阔的空间智能未来
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        AI 的下一步，是真正进入物理世界。无论是具身智能、机器人，还是工业仿真与数字孪生，这些方向共同指向一个基础性问题：<strong>AI 需要对真实的三维世界建立精确认知，也就是构建「世界模型」——理解空间结构、物体关系与物理规律。</strong>世界模型的前提，是对物理世界的精确感知与重建。这正是空间智能的核心价值所在：<strong>它是 AI 理解物理世界的入口，是 AI 从数字空间走向真实世界的第一步。</strong>
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        其域创新的技术路径，正是沿着这条逻辑构建的。通过空间相机完成高精度空间采集，经由 3D 高斯技术重建为高保真三维环境，再通过 LCC Studio 完成编辑与部署，形成从感知、重建、理解到创造的完整闭环。<strong>这套链路，是目前将真实世界转化为 AI 可用三维数据最高效、最完整的路径之一</strong>，即，将现实环境转化为 AI 可理解、可推理、可创造的世界模型，连接数字世界与物理世界，为 AI 进入真实世界提供基础能力支撑，推动空间智能技术在各行各业的规模化落地。
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        其域创新是目前<strong>全球唯一打通「全场景 3D 高斯采集—生成—压缩—编辑—应用部署」完整闭环的空间智能公司。</strong>其域创新此次在 NAB Show 获奖，是行业对空间智能与 3D 高斯技术的高度认可。随着影视、游戏、XR 与 AI 的不断融合，三维空间数据正逐步成为新一代内容生产的基础。
      </p>

      <p className="text-foreground font-semibold leading-relaxed mb-8">
        而其域创新，正是这个基础的入口。
      </p>

      {/* GIF1：PortalCam产品 — 文章最底部 */}
      <div className="mt-4 rounded-xl overflow-hidden">
        <img src="/images/news/nab-2026/portalcam-product.gif" alt="XGRIDS PortalCam 空间相机" className="w-full object-cover" />
      </div>

    </article>
  );
}

function ArticleEn() {
  return (
    <article className="max-w-none">

      <h1 className="font-display text-3xl font-bold text-foreground leading-tight mb-8">
        The World's Only: XGRIDS PortalCam Wins Four NAB 2026 Product of the Year Awards
      </h1>

      <p className="text-foreground-muted leading-relaxed mb-4">
        At the NAB Show—one of the most influential events in global broadcasting and film technology—XGRIDS achieved a significant milestone: its spatial camera, the <strong>PortalCam</strong>, was awarded four Product of the Year honors across four categories: <strong>Intelligent Technology, Graphics, Editing and Visual Effects, and Photography Equipment & Remote Production.</strong>
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        Winning awards <strong>across multiple categories</strong> signifies that its domain-specific innovations not only represent breakthroughs in a single technological direction but also have gained industry recognition across key stages of film and television production. The organizers described its spatial intelligence technology as <strong>"one of the most cutting-edge innovative intelligent technologies in the film and television industry today,"</strong> noting its profound impact on the sector's future development.
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/nab-2026/nab-trophies.jpg" alt="PortalCam with four NAB 2026 Product of the Year trophies" width={800} height={500} className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        Behind These Four Awards Lies a Transformation in the Industry Paradigm
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        Amid the rapidly evolving global landscape of artificial intelligence competition, <strong>spatial intelligence—serving as the critical nexus connecting the digital and physical worlds</strong>—is garnering widespread attention from the industry. Leading spatial intelligence enterprises, exemplified by XGRIDS, have developed comprehensive capabilities spanning from <strong>technology R&D to industrial-scale applications</strong>, gradually establishing their technological influence in the international market.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        The NAB Show has long served as a global benchmark for film, television, broadcasting, and content production technologies. Each year, technology companies, media organizations, and creators from around the world gather to showcase and select the most groundbreaking products and solutions. <strong>The NAB Show Annual Product Awards are renowned for their rigorous evaluation criteria, which prioritize not only technological advancement but also a product's ability to transform actual industry workflows.</strong>
      </p>

      <p className="text-foreground-muted leading-relaxed mb-6">
        Winning four major awards and standing out on such a stage demonstrates that XGRIDS's spatial intelligence technology not only features cutting-edge innovation <strong>but also holds immense potential to transform industry workflows.</strong>
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <Image src="/images/news/nab-2026/nab-stage.jpg" alt="NAB Show Product of the Year 2026 award ceremony" width={800} height={450} className="w-full object-cover" />
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-6">
        PortalCam: Defining a True Space Camera
      </h2>

      <div className="my-6 rounded-xl overflow-hidden">
        <Image src="/images/news/nab-2026/portalcam-banner.jpg" alt="XGRIDS PortalCam Wins Product Of the Year in 4 Categories at NAB Show 2026" width={800} height={420} className="w-full object-cover" />
      </div>

      <p className="text-foreground-muted leading-relaxed mb-4">
        For a long time, film and television production has relied on high-cost, time-consuming on-location shooting and post-production reconstruction processes. The emergence of spatial intelligence and 3D Gaussian technology is transforming <strong>"digitalization of the real world"</strong> into a more efficient and direct production method. <strong>The PortalCam serves as the pivotal gateway to this transformation.</strong>
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        The PortalCam is a spatial camera developed by XGRIDS, capable of transforming real-world environments into vivid 3D models. Its core value extends beyond mere "photography"—it enables high-quality spatial data collection in motion through integrated multi-camera and LiDAR sensing, <strong>directly converting the physical world into an interactive, editable, and shareable 3D digital space.</strong> When paired with XGRIDS's LCC (Lixel Cyber Color) Studio software, the system automates data processing and editing, significantly lowering the barrier to 3D content creation.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-8">
        This means that processes traditionally requiring multi-team collaboration and weeks to complete can now be finished in less time while maintaining higher fidelity.
      </p>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        XGRIDS's Innovation Solution Integrated into the Film & Television Workflow
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-6">
        The emergence of spatial intelligence and 3D Gaussian technology means that numerous stages in the film and television workflow—<strong>from location scouting to virtual production, and from pre-production to XR live streaming</strong>—which have long relied on human expertise and costly reconstruction, are now being redefined. Prior to its award at the NAB Show, XGRIDS's innovative spatial intelligence solution had already undergone practical validation in multiple leading global film and television projects.
      </p>

      <div className="my-8 rounded-xl overflow-hidden">
        <img src="/images/news/nab-2026/portacam-scan.gif" alt="Handheld PortalCam scanning a real-world scene" className="w-full object-cover" />
      </div>

      <div className="border-l-4 border-accent pl-5 mb-6">
        <h3 className="font-semibold text-foreground mb-3"><em>Resurrection</em>: Integration of On-site Scouting and Virtual Set Design</h3>
        <p className="text-foreground-muted leading-relaxed text-sm mb-4">
          During the production of the film <em>Resurrection</em>, the PortalCam was employed for <strong>preliminary location scouting and digital spatial data acquisition.</strong> The scanned scenes could be directly utilized for set design, lighting planning, and camera movement simulation.
        </p>
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/news/nab-2026/resurrection-3dgs.jpg" alt="Resurrection — 3DGS environment reconstruction" width={800} height={420} className="w-full object-cover" />
        </div>
      </div>

      <div className="border-l-4 border-accent pl-5 mb-6">
        <h3 className="font-semibold text-foreground mb-3">South Korea's SBS Broadcasting Station: Real-time XR Live Broadcast</h3>
        <p className="text-foreground-muted leading-relaxed text-sm mb-4">
          SBS, a leading broadcaster in South Korea, <strong>has officially launched its AIXR Studio, becoming the first broadcaster to integrate 3DGS and XR technologies into live news production.</strong> Through collaboration with XGRIDS, SBS captures real-world scenes and transforms them into immersive 3D environments, enabling anchors to seamlessly switch between various live broadcast scenarios.
        </p>
        <div className="rounded-xl overflow-hidden">
          <img src="/images/news/nab-2026/sbs-xr.jpg" alt="SBS AIXR Studio XR live broadcast" className="w-full object-cover" />
        </div>
      </div>

      <div className="border-l-4 border-accent pl-5 mb-8">
        <h3 className="font-semibold text-foreground mb-3">In Collaboration with Apple TV: <em>Shrinking</em> Pioneers Innovative Virtual Filming</h3>
        <p className="text-foreground-muted leading-relaxed text-sm">
          During the production of the Apple TV+ series <em>Shrinking</em>, XGRIDS collaborated on virtual filming, conducting spatial scanning and digital reconstruction of the shooting scenes in advance. <strong>The scenes were directly projected onto LED screens, allowing actors to perform in real-time within the virtual environment—a "what-you-see-is-what-you-get" filming approach that minimized reliance on post-production compositing.</strong>
        </p>
      </div>

      <h2 className="font-display text-xl font-bold text-foreground mt-10 mb-4">
        Moving Towards a Broader Future of Spatial Intelligence
      </h2>

      <p className="text-foreground-muted leading-relaxed mb-4">
        The next step for AI is to truly integrate into the physical world. Whether through embodied intelligence, robotics, industrial simulation, or digital twins, these approaches all address a fundamental challenge: <strong>AI must develop an accurate understanding of the real three-dimensional world—namely, construct a "world model" that encompasses spatial structures, object relationships, and physical laws.</strong> The prerequisite for such a world model is precise perception and reconstruction of the physical world. This constitutes the core value of spatial intelligence: <strong>it serves as the gateway for AI to comprehend the physical world and marks its first step in transitioning from the digital realm to the real world.</strong>
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        The technological pathway of XGRIDS is precisely constructed along this logical framework. High-precision spatial data is collected using spatial cameras, reconstructed into high-fidelity 3D environments through 3D Gaussian technology, and then edited and deployed via LCC Studio, forming a complete closed-loop process spanning perception, reconstruction, understanding, and creation. <strong>This workflow represents one of the most efficient and comprehensive approaches for transforming the real world into AI-ready 3D data</strong>—converting physical environments into world models that AI can comprehend, reason from, and create.
      </p>

      <p className="text-foreground-muted leading-relaxed mb-4">
        <strong>XGRIDS is currently the world's only spatial intelligence company that has established a complete closed-loop system encompassing "full-scenario 3D Gaussian data acquisition, generation, compression, editing, and application deployment."</strong> Its award at the NAB Show underscores the industry's high recognition of its spatial intelligence and 3D Gaussian technologies. As film, gaming, XR, and AI continue to converge, <strong>3D spatial data is increasingly becoming the foundation for next-generation content production.</strong>
      </p>

      <p className="text-foreground font-semibold leading-relaxed mb-8">
        And XGRIDS serves precisely as the gateway to this foundation.
      </p>

      <div className="mt-4 rounded-xl overflow-hidden">
        <img src="/images/news/nab-2026/portalcam-product.gif" alt="XGRIDS PortalCam spatial camera" className="w-full object-cover" />
      </div>

    </article>
  );
}
