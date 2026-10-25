'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowUpRight, ArrowRight, Check, Radar, LocateFixed, Radio, BatteryCharging, Layers3, Route, Mail } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const field = 'mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';
const wrap = 'mx-auto max-w-7xl px-5 sm:px-8';
const action = 'inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary';

export default function Matrice400() {
  const locale = useLocale();
  const t = useTranslations('matrice400');
const missions = [
  { id: 'inspection', name: t("inspection_emergency_response"), tag: t("see_the_scene_make_informed_decisions"), payload: 'Zenmuse H30T', description: t("for_infrastructure_inspections_thermal_anomaly_checks_and_emerge"), result: t("visual_imagery_thermal_information"), extras: t("ask_about_adding_a_zenmuse_s1_spotlight_or_v1_speaker_if_your_mi") },
  { id: 'mapping', name: t("3d_mapping"), tag: t("turn_terrain_into_usable_data"), payload: 'Zenmuse L3 / L2', description: t("for_terrain_mapping_forestry_surveys_and_engineering_data_captur"), result: t("point_clouds_terrain_3d_data"), extras: t("we_can_also_discuss_a_dji_terra_processing_workflow_and_the_soft") },
  { id: 'survey', name: t("aerial_surveying_modelling"), tag: t("from_imagery_to_project_deliverables"), payload: 'Zenmuse P1', description: t("for_orthophoto_capture_project_documentation_and_reality_modelli"), result: t("survey_imagery_orthophotos_reality_models"), extras: t("tell_us_the_survey_area_target_resolution_and_the_deliverables_y") },
] as const;

const features = [
  { icon: BatteryCharging, title: t("more_time_on_each_mission"), text: t("up_to_59_minutes_of_flight_time_means_fewer_returns_for_battery_"), note: t("actual_flight_time_varies_with_payload_wind_and_mission_profile") },
  { icon: Radar, title: t("multiple_sensors_for_complex_environments"), text: t("rotating_lidar_millimetre_wave_radar_and_vision_systems_work_tog") },
  { icon: Layers3, title: t("match_the_payload_to_the_mission"), text: t("up_to_6_kg_payload_capacity_supports_a_range_of_gimbals_and_addi"), note: t("individual_mounting_positions_have_their_own_weight_limits") },
  { icon: LocateFixed, title: t("precise_rtk_positioning"), text: t("supports_rtk_fixed_solution_positioning_and_heading_determinatio"), note: t("positioning_accuracy_is_not_the_same_as_final_survey_accuracy_wh") },
  { icon: Radio, title: t("o4_enterprise_enhanced_transmission"), text: t("video_transmission_up_to_20_km_under_the_ce_standard_supports_yo"), note: t("actual_range_is_affected_by_obstacles_and_interference") },
  { icon: Route, title: t("simplify_repeat_missions"), text: t("automated_routes_and_mission_execution_support_data_collection_a") },
];

const specs = [
  [t("max_flight_time"), t("59_minutes"), t("at_sea_level_no_wind_h30t_only_constant_forward_speed_of_10_m_s")],
  [t("max_payload"), '6 kg²', t("third_gimbal_connector_depends_on_mounting_method_and_altitude")],
  [t("max_takeoff_weight"), t("15_8_kg"), t("total_aircraft_weight_limit_not_payload_weight")],
  [t("ingress_protection"), 'IP55', t("protection_is_not_permanent_and_may_decrease_with_wear")],
  [t("operating_temperature"), t("20_c_to_50_c"), t("without_solar_radiation")],
  [t("transmission_range_ce"), t("up_to_20_km"), t("unobstructed_and_free_of_interference")],
  [t("rtk_fixed_solution_accuracy"), t("horizontal_1_cm_1_ppm"), t("vertical_1_5_cm_1_ppm")],
  [t("max_wind_resistance"), '12 m/s', t("during_takeoff_and_landing")],
];


  const [mission, setMission] = useState<(typeof missions)[number]['id']>('inspection');
  const [intent, setIntent] = useState(t("request_a_configuration_quote"));
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const selected = missions.find(item => item.id === mission)!;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const values = new FormData(event.currentTarget);
    if (!String(values.get('name')).trim() || !String(values.get('company')).trim()) {
      setError(t("please_enter_your_name_and_company_name")); setStatus('error'); return;
    }
    setStatus('sending'); setError('');
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
        body: JSON.stringify({
          name: String(values.get('name')).trim(), company: String(values.get('company')).trim(), email: String(values.get('email')).trim(),
          interests: ['dji'], products: { dji: ['inspection'] }, locale,
          message: [t("product_dji_matrice_400"), `需求：${intent}`, `用途：${selected.name}`, `意向载荷：${selected.payload}（待确认）`, `数量：${values.get('quantity')}`, `交付国家/地区：${values.get('region') || t("to_be_discussed")}`, `项目补充：${values.get('message') || t("none")}`].join('\n'),
        }),
      });
      if (!response.ok) throw new Error(response.status === 429 ? t("too_many_requests_please_try_again_shortly") : t("your_enquiry_could_not_be_submitted_please_try_again_or_contact_"));
      const result = await response.json();
      if (!result.success) throw new Error(t("submission_has_not_been_confirmed_please_try_again_or_contact_us"));
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error && err.name !== 'AbortError' ? err.message : t("the_connection_timed_out_please_try_again_your_entries_have_been"));
      setStatus('error');
    } finally { clearTimeout(timer); }
  }

  return (
    <main className="bg-white pb-20 lg:pb-0">
      <Navbar />
      <section id="overview" className="relative mt-16 overflow-hidden bg-[#111a24] text-white">
        <div className="relative min-h-[280px] sm:min-h-[380px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[64%]">
          <Image src="/images/drones/dji/m400-landscape.webp" alt={t("dji_matrice_400_flying_above_a_mountain_landscape")} fill preload className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 64vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111a24] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#111a24] lg:via-[#111a24]/5" />
        </div>
        <div className={`${wrap} relative -mt-12 pb-14 lg:mt-0 lg:py-20`}>
          <nav aria-label={t("breadcrumb")} className="mb-10 flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <Link href={`/${locale}/drones/dji`} className="hover:text-white">{t("dji_enterprise_drones")}</Link><span aria-hidden="true">/</span><span>Matrice 400</span>
          </nav>
          <div className="max-w-lg lg:max-w-[43%]">
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-emerald-300">{t("dji_enterprise_flagship_platform")}</p>
            <h1 className="text-[clamp(3.2rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.05em]">Matrice 400<span className="mt-5 block text-2xl font-medium leading-snug tracking-normal sm:text-3xl">{t("complex_missions")}<br />{t("clear_answers")}</span></h1>
            <p className="mb-7 mt-5 max-w-md text-sm leading-7 text-slate-300">{t("long_endurance_flexible_payloads_precise_rtk_positioning")}<br />{t("from_infrastructure_inspection_to_3d_mapping_build_an_aerial_sys")}</p>
            <div className="flex flex-wrap gap-3"><a className={action} href="#inquiry">{t("request_a_configuration_quote")}<ArrowUpRight size={17} /></a><a className="inline-flex items-center gap-2 px-3 py-3 text-sm text-white underline decoration-white/40 underline-offset-8 hover:decoration-white" href="#specifications">{t("view_key_specifications")}<ArrowRight size={16} /></a></div>
            <p className="mt-6 text-xs text-slate-300">SUNOVA INNOVATION × COLTEK ROBOTICS</p>
          </div>
        </div>
      </section>

      <nav aria-label={t("product_navigation")} className="sticky top-16 z-30 border-b border-border bg-white/95 backdrop-blur-md">
        <div className={`${wrap} flex min-h-16 items-center justify-between gap-5`}>
          <span className="hidden shrink-0 text-sm font-bold sm:block">DJI Matrice 400</span>
          <div className="flex w-full justify-between gap-3 overflow-x-auto text-xs font-medium text-slate-600 sm:w-auto sm:gap-7 sm:text-sm">
            {[['capabilities', t("capabilities")], ['configuration', t("applications_payloads")], ['specifications', t("specifications")], ['inquiry', t("enquire")]].map(([id, label]) => <a key={id} href={`#${id}`} className="whitespace-nowrap py-5 hover:text-primary">{label}</a>)}
          </div>
        </div>
      </nav>

      <div className={`${wrap} py-10 sm:py-12`}>
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {[['59', t("min"), t("max_flight_time")], ['6', 'kg²', t("max_payload")], ['IP55', '', t("ingress_protection")], ['20', 'km³', t("transmission_range_under_ce")]].map(([value, unit, label], i) => <div key={label} className={`px-5 ${i ? 'border-l border-slate-200' : ''}`}><p className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{value}<span className="ml-2 text-sm font-normal text-slate-500">{unit}</span></p><p className="mt-3 text-sm text-slate-500">{label}</p></div>)}
        </div>
        <p className="mt-8 text-xs leading-5 text-slate-500">{t("figures_are_based_on_dji_s_specified_test_conditions_not_all_con")}</p>
      </div>

      <section id="capabilities" className="scroll-mt-36 border-t border-border bg-[#f7f8fa] py-16 sm:py-20">
        <div className={wrap}>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-semibold tracking-[0.18em] text-primary">{t("01_capabilities")}</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("built_to_get_the_job_done")}</h2></div><p className="max-w-sm text-sm leading-6 text-slate-500">{t("focus_on_what_matters_for_your_choice")}<br />{t("technology_that_serves_your_daily_work")}</p></div>
          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, text, note }, i) => <article key={title} className="border-t border-slate-200 py-7"><div className="mb-5 flex items-center justify-between"><Icon size={24} className="text-primary" strokeWidth={1.5} /><span className="font-mono text-xs text-slate-400">0{i + 1}</span></div><h3 className="mb-3 text-lg font-semibold">{title}</h3><p className="text-sm leading-7 text-slate-600">{text}</p>{note && <p className="mt-3 text-xs leading-5 text-slate-500">{t("note")}{note}</p>}</article>)}</div>
        </div>
      </section>

      <section id="configuration" className="scroll-mt-36 py-16 sm:py-20">
        <div className={wrap}>
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-primary">{t("02_applications_payloads")}</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("start_with_the_mission_then_choose_the_kit")}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">{t("matrice_400_is_the_flight_platform_the_payload_determines_what_y")}</p>
          <div className="my-8 grid gap-3 sm:grid-cols-3" role="group" aria-label={t("choose_an_application")}>{missions.map(item => <button key={item.id} type="button" aria-pressed={mission === item.id} onClick={() => setMission(item.id)} className={`flex items-center justify-between rounded-xl border p-5 text-left transition-colors ${mission === item.id ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 hover:border-primary/50'}`}><span><span className="block font-semibold">{item.name}</span><span className="mt-1 block text-xs text-slate-500">{item.tag}</span></span>{mission === item.id ? <Check size={19} /> : <ArrowUpRight size={19} />}</button>)}</div>
          <div className="grid overflow-hidden rounded-2xl bg-[#111a24] text-white lg:grid-cols-2">
            <div className="relative min-h-72 lg:min-h-[420px]"><Image src="/images/drones/dji/m400-mission.webp" alt={t("matrice_400_carrying_multiple_payloads_illustrative_configuratio")} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /><span className="absolute bottom-4 left-4 rounded bg-black/55 px-3 py-1.5 text-xs text-white">{t("illustrative_setup_not_the_selected_package_contents")}</span></div>
            <div className="p-7 sm:p-10" aria-live="polite"><p className="text-xs tracking-widest text-emerald-300">{selected.name} {t("suggested_setup")}</p><h3 className="mb-2 mt-5 text-2xl font-semibold">Matrice 400</h3><p className="text-xl text-slate-200">+ {selected.payload}</p><p className="mt-5 text-sm leading-7 text-slate-300">{selected.description}</p><div className="my-5 border-y border-white/15 py-4"><p className="mb-2 text-xs text-slate-400">{t("intended_outputs")}</p><p className="text-sm">{selected.result}</p></div><p className="mb-6 text-xs leading-6 text-slate-400">{selected.extras}</p><a href="#inquiry" className={action}>{t("enquire_about_this_setup")}<ArrowUpRight size={16} /></a></div>
          </div>
        </div>
      </section>

      <section id="specifications" className="scroll-mt-36 border-y border-border bg-[#f7f8fa] py-16 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.7fr]`}>
          <div><p className="mb-3 text-xs font-semibold tracking-[0.18em] text-primary">{t("03_specifications")}</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("key_specifications")}<br className="hidden lg:block" />{t("at_a_glance")}</h2><p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">{t("the_figures_that_matter_most_when_choosing_a_system_we_can_check")}</p><a href="#inquiry" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">{t("check_suitability_for_my_project")}<ArrowRight size={16} /></a></div>
          <div><div className="overflow-hidden rounded-xl border border-slate-200 bg-white"><table className="w-full text-left text-sm"><caption className="sr-only">{t("dji_matrice_400_key_specifications")}</caption><tbody>{specs.map(([name, value, note]) => <tr key={name} className="border-b border-slate-100 last:border-0"><th scope="row" className="w-[40%] px-4 py-4 align-top font-medium text-slate-500 sm:px-6">{name}</th><td className="px-4 py-4 sm:px-6"><span className="font-semibold">{value}</span><span className="mt-1 block text-xs leading-5 text-slate-500">{note}</span></td></tr>)}</tbody></table></div>
            <details className="mt-4 rounded-xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer text-sm font-semibold">{t("view_dimensions_weight_and_ports")}</summary><dl className="mt-5 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">{[[t("aircraft_weight_with_battery"), '9740 ± 40 g'], [t("unfolded_dimensions"), '980 × 760 × 480 mm'], [t("folded_dimensions"), '490 × 490 × 480 mm'], [t("expansion_ports"), '4 × E-Port V2']].map(([k,v]) => <div key={k}><dt className="text-xs text-slate-500">{k}</dt><dd className="mt-1 font-medium">{v}</dd></div>)}</dl><p className="mt-4 text-xs text-slate-500">{t("dimensions_exclude_propellers_unfolded_dimensions_include_landin")}</p></details>
            <div className="mt-5 space-y-2 text-xs leading-6 text-slate-500"><p>{t("59_minutes_measured_at_sea_level_in_windless_conditions_with_h30")}</p><p>{t("6_kg_applies_to_the_third_gimbal_connector_at_sea_level_with_scr")}</p><p>{t("20_km_communication_range_under_the_ce_standard_in_unobstructed_")}</p><p>{t("specifications_and_compatibility_information_refer_to")}<a href="https://enterprise.dji.com/matrice-400/specs" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{t("dji_official_specifications")}</a>{t("payloads_are_selected_separately_the_confirmed_quotation_defines")}</p></div>
          </div>
        </div>
      </section>

      <section id="purchase-questions" className="scroll-mt-36 py-14">
        <div className={`${wrap} grid gap-8 md:grid-cols-2`}>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary">{t("before_you_buy")}</p>
            <h2 className="mt-4 text-2xl font-semibold">{t("buy_the_right_system_put_it_to_work")}</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">{t("from_the_complete_system_cost_to_reusing_existing_equipment_get_")}</p>
          </div>
          <div className="space-y-1">
            {[
  [
    t("what_should_i_budget_for_a_complete_operational_m400_system"),
    t("look_beyond_the_aircraft_price_include_the_mission_payload_spare")
  ],
  [
    t("can_i_reuse_my_m350_cameras_and_equipment_when_upgrading"),
    t("some_payloads_can_be_reused_dji_s_m400_compatibility_list_includ")
  ],
  [
    t("will_it_still_fly_for_59_minutes_with_my_payload"),
    t("do_not_plan_a_mission_around_the_full_59_minutes_that_figure_was")
  ],
  [
    t("do_i_need_to_buy_a_base_station_to_use_rtk"),
    t("not_necessarily_m400_can_connect_to_a_network_rtk_service_throug")
  ]
].map(([q,a]) => (
              <details key={q} className="border-b border-slate-200 py-4">
                <summary className="cursor-pointer text-sm font-semibold leading-6">{q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-500">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-36 bg-[#f0edf8] py-16 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.3fr]`}>
          <div><p className="mb-3 text-xs font-semibold tracking-[0.18em] text-primary">{t("04_enquiry_purchase")}</p><h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{t("tell_us_your_mission")}<br />{t("let_s_configure_your_system")}</h2><p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">{t("get_an_equipment_list_quotation_and_delivery_information_for_you")}</p><div className="my-7 border-y border-primary/15 py-5"><p className="text-xs text-slate-500">{t("your_configuration_of_interest")}</p><p className="mt-3 text-lg font-semibold">DJI Matrice 400</p><p className="mt-2 text-sm text-slate-600">{selected.name} · {selected.payload}</p><a href="#configuration" className="mt-3 inline-block text-xs font-semibold text-primary underline underline-offset-4">{t("change_application_configuration")}</a></div><a className="inline-flex items-center gap-2 break-all text-sm text-primary" href={`mailto:support@sunova-innovation.nl?subject=${encodeURIComponent(t("matrice_400_configuration_enquiry"))}&body=${encodeURIComponent([t("matrice_400_configuration_enquiry"), selected.name, selected.payload].join('\n'))}`}><Mail size={16} className="shrink-0" />support@sunova-innovation.nl</a><p className="mt-5 text-xs leading-6 text-slate-500">{t("sunova_innovation_b_v_netherlands")}<br />{t("coltek_robotics_gmbh_germany")}</p></div>
          <form onSubmit={submit} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8" aria-label={t("matrice_400_purchase_enquiry")}>
            {status === 'success' ? <div role="status" className="py-14 text-center"><Check className="mx-auto mb-5 text-emerald-600" size={36} /><h3 className="text-xl font-semibold">{t("enquiry_submitted")}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{t("we_will_contact_you_at_the_email_address_provided")}<br />{t("to_confirm_the_configuration_and_quotation_this_is_not_yet_an_or")}</p></div> : <>
              <h3 className="mb-5 text-lg font-semibold">{t("request_your_project_quotation")}</h3>
              <fieldset disabled={status === 'sending'} className="space-y-5 disabled:opacity-60">
                <div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-medium">{t("name")}<input name="name" required maxLength={80} autoComplete="name" className={field} /></label><label className="text-sm font-medium">{t("company_name")}<input name="company" required maxLength={160} autoComplete="organization" className={field} /></label></div>
                <label className="block text-sm font-medium">{t("email_address")}<input type="email" name="email" required maxLength={254} autoComplete="email" className={field} placeholder="name@company.com" /></label>
                <div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-medium">{t("quantity")}<input name="quantity" type="number" min="1" max="999" step="1" defaultValue="1" required className={field} /></label><label className="text-sm font-medium">{t("delivery_country_region")}<input name="region" maxLength={100} autoComplete="country-name" placeholder={t("for_example_netherlands")} className={field} /></label></div>
                <label className="block text-sm font-medium">{t("what_would_you_like_to_discuss")}<select value={intent} onChange={event => setIntent(event.target.value)} className={field}><option>{t("request_a_configuration_quote")}</option><option>{t("purchasing_and_delivery_times")}</option><option>{t("technical_selection_advice")}</option></select></label>
                <label className="block text-sm font-medium">{t("project_requirements")}<textarea name="message" rows={3} maxLength={3000} placeholder={t("for_example_power_line_inspections_thermal_imaging_required_plan")} className={field} /></label>
                <label className="flex items-start gap-3 text-xs leading-6 text-slate-500"><input type="checkbox" required className="mt-1.5 accent-violet-600" /><span>{t("i_have_read_the")}<a href={`/${locale}/privacy`} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{t("privacy_policy")}</a>{t("and_agree_to_the_use_of_my_information_to_handle_this_enquiry")}</span></label>
                {status === 'error' && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm leading-6 text-red-700">{error}</p>}
                <button type="submit" className={`${action} w-full`} disabled={status === 'sending'}>{status === 'sending' ? t("submitting") : t("submit_enquiry")}<ArrowRight size={17} /></button>
                <p className="text-center text-xs leading-5 text-slate-500">{t("confirm_configuration_price_and_delivery_before_ordering_no_paym")}</p>
              </fieldset>
            </>}
          </form>
        </div>
      </section>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-5 py-3 shadow-lg lg:hidden"><div className="text-xs"><p className="font-semibold">DJI Matrice 400</p><p className="mt-1 text-slate-500">{t("configuration_quotation")}</p></div><a href="#inquiry" className={action}>{t("get_a_quote")}<ArrowUpRight size={16} /></a></div>
    </main>
  );
}
