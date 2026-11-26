(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const IMG = "assets/img/";

  const UI = {
    en: {
      skip: "Skip to work",
      "nav.work": "Work", "nav.about": "About", "nav.contact": "Contact",
      "hero.role": "Product Manager who also designs and builds.",
      "hero.meta": "South Tangerang, Indonesia. I take products from the first user interview to the day people use them.",
      statement: "I start from the problem, not the feature: who the user is, what blocks them today, and how we will know the solution worked.",
      "work.title": "Selected work", "work.hint": "Open a project to read the case.",
      "other.title": "Also built",
      "other.mp": "Memburu Pemangsa film landing page for DMS+",
      "other.spk": "Employee bonus decision support system (SMART method), undergraduate thesis at PT Kreatif Berkah Abadi",
      "about.title": "About",
      "about.p1": "I studied Informatics Engineering at Universitas Pamulang and trained as a Product Manager at the Harisenin bootcamp. Most of my work is for small businesses that need one person who can talk to their users, write down what to build, and see it shipped.",
      "about.p2": "Because I can also design in Figma and write code, I can judge for myself whether a requirement is feasible, how long it will take, and where the risks are. That keeps conversations with design and engineering short.",
      "kit.pm": "Product", "kit.ux": "Design", "kit.dev": "Build",
      "kit.pm.list": "Requirement gathering, PRDs, MVP scoping, personas, user stories, acceptance criteria, roadmaps, OKRs and success metrics, user interviews, surveys, competitive benchmarking.",
      "kit.ux.list": "Figma, FigJam, design systems, user flows, wireframes, prototypes, heuristic evaluation, usability testing, WCAG contrast checks.",
      "path.unpam": "B.Sc. Informatics Engineering, Universitas Pamulang. GPA 3.26.",
      "path.hs": "UI/UX & Product Management Bootcamp, Harisenin. Product Manager track, GPA 3.50.",
      "path.bnsp": "BNSP certified Programmer, LSP Universitas Pamulang.",
      "path.ms": "UI/UX Design Fundamentals, MySkill.",
      "contact.title": "Contact",
      "contact.lead": "Hiring a Product Manager, or need a product planned and built? Send me an email.",
      "contact.copy": "Copy email address", copied: "Copied to clipboard.", copyFail: "Could not copy. Select the address above instead.",
      "foot.top": "Back to top",
      "case.close": "Close",
      role: "Role", when: "When", stack: "Stack", link: "Live site", next: "Next project",
      imgFail: "Image did not load."
    },
    id: {
      skip: "Langsung ke proyek",
      "nav.work": "Proyek", "nav.about": "Tentang", "nav.contact": "Kontak",
      "hero.role": "Product Manager yang juga merancang dan membangun.",
      "hero.meta": "Tangerang Selatan, Indonesia. Saya mengawal produk dari wawancara pengguna pertama sampai benar-benar dipakai.",
      statement: "Saya mulai dari masalah, bukan dari fitur: siapa penggunanya, apa yang menghambat mereka hari ini, dan bagaimana kita tahu solusinya berhasil.",
      "work.title": "Proyek pilihan", "work.hint": "Buka proyek untuk membaca studi kasusnya.",
      "other.title": "Juga dibangun",
      "other.mp": "Landing page film Memburu Pemangsa untuk DMS+",
      "other.spk": "Sistem pendukung keputusan bonus karyawan (metode SMART), skripsi di PT Kreatif Berkah Abadi",
      "about.title": "Tentang",
      "about.p1": "Saya lulusan Teknik Informatika Universitas Pamulang dan belajar menjadi Product Manager di bootcamp Harisenin. Sebagian besar pekerjaan saya untuk usaha kecil yang butuh satu orang untuk berbicara dengan penggunanya, menuliskan apa yang harus dibangun, lalu mengawalnya sampai rilis.",
      "about.p2": "Karena saya juga bisa mendesain di Figma dan menulis kode, saya bisa menilai sendiri apakah sebuah kebutuhan masuk akal, berapa lama pengerjaannya, dan apa risikonya. Diskusi dengan tim desain dan engineering jadi lebih singkat.",
      "kit.pm": "Produk", "kit.ux": "Desain", "kit.dev": "Pengembangan",
      "kit.pm.list": "Penggalian kebutuhan, PRD, cakupan MVP, persona, user story, acceptance criteria, roadmap, OKR dan metrik keberhasilan, wawancara pengguna, survei, competitive benchmarking.",
      "kit.ux.list": "Figma, FigJam, design system, user flow, wireframe, prototipe, evaluasi heuristik, usability testing, pengecekan kontras WCAG.",
      "path.unpam": "S1 Teknik Informatika, Universitas Pamulang. IPK 3,26.",
      "path.hs": "UI/UX & Product Management Bootcamp, Harisenin. Jalur Product Manager, IPK 3,50.",
      "path.bnsp": "Sertifikat BNSP Pemrogram, LSP Universitas Pamulang.",
      "path.ms": "UI/UX Design Fundamental, MySkill.",
      "contact.title": "Kontak",
      "contact.lead": "Sedang mencari Product Manager, atau butuh produk yang direncanakan sekaligus dibangun? Kirim email ke saya.",
      "contact.copy": "Salin alamat email", copied: "Tersalin ke clipboard.", copyFail: "Gagal menyalin. Pilih alamat di atas secara manual.",
      "foot.top": "Kembali ke atas",
      "case.close": "Tutup",
      role: "Peran", when: "Waktu", stack: "Teknologi", link: "Situs", next: "Proyek berikutnya",
      imgFail: "Gambar gagal dimuat."
    }
  };

  // Every claim below comes from the PRDs, CV, and project files; Villa figures are PRD targets, not results.
  const WORK = [
    {
      slug: "untuku-dental", title: "UNTUKU DENTAL", year: "2026", cover: "untuku-cover",
      when: { en: "Aug - Nov 2026", id: "Agu - Nov 2026" },
      stack: "PHP, MySQL, Next.js, NestJS, PostgreSQL",
      kind: { en: "Clinic records and booking", id: "Rekam medis dan reservasi klinik" },
      role: { en: "Product Manager, UI/UX, full-stack", id: "Product Manager, UI/UX, full-stack" },
      kicker: { en: "Electronic medical records and online reservations for a dental clinic", id: "Rekam medis elektronik dan reservasi online untuk klinik gigi" },
      context: {
        en: ["The clinic started with a simple local membership app. As it grew, it needed electronic medical records that follow Indonesia's SATUSEHAT standard and a way for patients to book a dentist online."],
        id: ["Klinik ini berawal dari aplikasi membership lokal yang sederhana. Seiring berkembang, klinik butuh rekam medis elektronik yang selaras dengan standar SATUSEHAT dan cara bagi pasien untuk reservasi dokter gigi secara online."]
      },
      did: {
        en: [
          "Ran requirement gathering with the clinic using a question list and a requirements checklist, then turned the answers into scope, UAT acceptance criteria, and a phased timeline.",
          "Wrote the membership PRD, then v2 and v3 to grow it into an integrated clinic system with QR reservations and doctor ratings.",
          "Led the E-RM and reservation product: PRD v1.0 to v1.2, architecture document, timeline, and cost proposal.",
          "Interviewed dentists and admin staff, mapped flows for six clinic roles in FigJam, and designed 60+ screens in Figma.",
          "Built the system as a Next.js, NestJS, and PostgreSQL monorepo with WhatsApp OTP."
        ],
        id: [
          "Menggali kebutuhan bersama klinik lewat daftar pertanyaan dan checklist kebutuhan, lalu menerjemahkannya menjadi cakupan, kriteria penerimaan UAT, dan timeline bertahap.",
          "Menyusun PRD membership, lalu v2 dan v3 untuk mengembangkannya menjadi sistem klinik terpadu dengan reservasi QR dan penilaian dokter.",
          "Memimpin produk E-RM dan reservasi: PRD v1.0 sampai v1.2, dokumen arsitektur, timeline, dan penawaran biaya.",
          "Mewawancarai dokter dan admin, memetakan alur enam peran klinik di FigJam, dan merancang 60+ layar di Figma.",
          "Membangun sistemnya dalam monorepo Next.js, NestJS, dan PostgreSQL dengan OTP WhatsApp."
        ]
      },
      decision: {
        en: "Two booking paths. <span>Returning patients</span> are confirmed instantly by phone number. <span>New patients</span> answer screening questions that become a draft anamnesis for the dentist.",
        id: "Dua jalur reservasi. <span>Pasien lama</span> langsung terkonfirmasi lewat nomor HP. <span>Pasien baru</span> menjawab pertanyaan skrining yang menjadi draf anamnesis untuk dokter."
      },
      shots: [
        { src: "untuku-erm", cls: "", cap: { en: "Staff reservation board: confirm or reject each incoming booking.", id: "Papan reservasi staf: konfirmasi atau tolak tiap reservasi masuk." } },
        { src: "untuku-slot", cls: "half phone", cap: { en: "Patient picks a date and a free slot.", id: "Pasien memilih tanggal dan slot kosong." } },
        { src: "untuku-done", cls: "half phone", cap: { en: "Booking received, waiting for clinic confirmation.", id: "Reservasi diterima, menunggu konfirmasi klinik." } }
      ]
    },
    {
      slug: "villa-ar-bali", title: "Villa AR Bali", year: "2026", cover: "villa-hero", url: "https://villaarbali.com",
      when: { en: "Sep - Nov 2026", id: "Sep - Nov 2026" },
      stack: "Next.js, PostgreSQL, Xendit, Docker",
      kind: { en: "Direct booking for a private villa", id: "Booking langsung untuk villa privat" },
      role: { en: "Product Manager, UI/UX, full-stack", id: "Product Manager, UI/UX, full-stack" },
      kicker: { en: "A direct booking website and admin dashboard for a private villa in Bali", id: "Website booking langsung dan dashboard admin untuk villa privat di Bali" },
      context: {
        en: ["Reservations were handled by hand, which took the admin about 20 minutes each and left room for double bookings. The owner wanted guests to book and pay on the villa's own website."],
        id: ["Reservasi masih diurus manual, sekitar 20 menit per reservasi untuk admin, dan rawan double booking. Pemilik ingin tamu bisa booking dan membayar langsung di website villa."]
      },
      targets: {
        en: [["0", "double bookings"], ["< 5 min", "admin time per reservation, down from about 20"], ["30%+", "of bookings made directly"], ["< 3 min", "for a guest to finish a booking"]],
        id: [["0", "double booking"], ["< 5 mnt", "waktu admin per reservasi, dari sekitar 20"], ["30%+", "booking dilakukan langsung"], ["< 3 mnt", "bagi tamu untuk menyelesaikan booking"]]
      },
      targetsNote: { en: "Targets set in the PRD", id: "Target yang ditetapkan di PRD" },
      did: {
        en: [
          "Wrote the PRD with business goals, product metrics, and personas for guests, admins, owners, and housekeeping.",
          "Scoped the booking engine, Xendit payments (QRIS, virtual account, e-wallet) with a manual transfer fallback, and the admin dashboard.",
          "Planned the launch for search, with Google Search Console set up from day one.",
          "Designed the responsive site and built it in Next.js and PostgreSQL, deployed with Docker on a VPS."
        ],
        id: [
          "Menyusun PRD berisi tujuan bisnis, metrik produk, dan persona tamu, admin, pemilik, serta housekeeping.",
          "Menentukan cakupan booking engine, pembayaran Xendit (QRIS, virtual account, e-wallet) dengan cadangan transfer manual, dan dashboard admin.",
          "Merencanakan peluncuran untuk mesin pencari, dengan Google Search Console terpasang sejak awal.",
          "Merancang website responsif dan membangunnya dengan Next.js dan PostgreSQL, deploy dengan Docker di VPS."
        ]
      },
      decision: {
        en: "Online payment is the default, but a <span>manual transfer fallback</span> stays in the flow so a failed gateway never loses a booking.",
        id: "Pembayaran online jadi pilihan utama, tapi <span>cadangan transfer manual</span> tetap ada di alur supaya gangguan gateway tidak menggagalkan booking."
      },
      shots: [
        { src: "villa-hero", cls: "", cap: { en: "Landing page with availability check.", id: "Halaman utama dengan cek ketersediaan." } },
        { src: "villa-rooms", cls: "wide", cap: { en: "Villa section with key facts.", id: "Bagian villa dengan informasi utama." } },
        { src: "villa-admin", cls: "third phone", cap: { en: "Admin booking table on mobile.", id: "Tabel booking admin di ponsel." } },
        { src: "villa-gallery", cls: "", cap: { en: "Gallery.", id: "Galeri." } }
      ]
    },
    {
      slug: "fajar-bahari", title: "Fajar Bahari", year: "2026", cover: "fajar-hero", url: "https://fajarbahari.id",
      when: { en: "Oct - Nov 2026", id: "Okt - Nov 2026" },
      stack: "Next.js, SQLite, nginx, PM2",
      kind: { en: "Booking platform for a music management", id: "Platform booking untuk manajemen musik" },
      role: { en: "Product Manager, UI/UX, full-stack", id: "Product Manager, UI/UX, full-stack" },
      kicker: { en: "One platform that runs a website and booking calendar for every band in a music management", id: "Satu platform yang menjalankan website dan kalender booking untuk setiap band di sebuah manajemen musik" },
      context: {
        en: ["The management handles several bands and solo acts. Each one needed its own website, and the manager needed one place to take bookings without promising the same date twice."],
        id: ["Manajemen ini menangani beberapa band dan penampil solo. Masing-masing butuh website sendiri, dan manajer butuh satu tempat untuk menerima booking tanpa menjanjikan tanggal yang sama dua kali."]
      },
      did: {
        en: [
          "Defined a multi-band platform with solo and band modes.",
          "Set booking rules that close a date once it is confirmed, and an approval flow for personnel schedules.",
          "Designed the band sites, availability calendars, and the manager and personnel dashboards.",
          "Built one Next.js app that serves a different site per band by domain, with an image CMS, deployed with nginx and PM2."
        ],
        id: [
          "Merumuskan platform multi-band dengan mode solo dan band.",
          "Menetapkan aturan booking yang menutup tanggal begitu terkonfirmasi, dan alur persetujuan jadwal personel.",
          "Merancang situs band, kalender ketersediaan, serta dashboard manajer dan personel.",
          "Membangun satu aplikasi Next.js yang menampilkan situs berbeda per band berdasarkan domain, dengan CMS gambar, deploy dengan nginx dan PM2."
        ]
      },
      decision: {
        en: "<span>One codebase, many domains.</span> Adding a band means adding data, not deploying a new website.",
        id: "<span>Satu kode, banyak domain.</span> Menambah band cukup dengan menambah data, bukan membuat website baru."
      },
      shots: [
        { src: "fajar-hero", cls: "wide", cap: { en: "Public band site.", id: "Situs publik band." } },
        { src: "fajar-band", cls: "third", cap: { en: "Band mode.", id: "Mode band." } },
        { src: "fajar-dash", cls: "", cap: { en: "Manager and personnel dashboards.", id: "Dashboard manajer dan personel." } }
      ]
    },
    {
      slug: "dms-android-tv", title: "DMS+ Android TV", year: "2026", cover: "tv-home",
      when: { en: "2026 - present", id: "2026 - sekarang" },
      stack: "Figma",
      kind: { en: "Streaming app for TV", id: "Aplikasi streaming untuk TV" },
      role: { en: "UI/UX Designer", id: "UI/UX Designer" },
      kicker: { en: "The Android TV app and shared design system for DMS+, a video streaming platform", id: "Aplikasi Android TV dan design system bersama untuk DMS+, platform streaming video" },
      context: {
        en: ["A TV is used from across the room with a remote. Focus states, safe areas, and text contrast all work differently from mobile, and the app had to share one design system with the mobile product."],
        id: ["TV dipakai dari jarak jauh dengan remote. Fokus, area aman layar, dan kontras teks bekerja berbeda dari ponsel, dan aplikasinya harus berbagi satu design system dengan produk mobile."]
      },
      did: {
        en: [
          "Designed 128 screens at 1920x1080: home, title detail, profile, My List, downloads, articles, and SosokPedia.",
          "Built and documented the design system used across mobile and TV: 49 color styles, 58 text styles, and 140 components with variants for four themes.",
          "Wrote the TV rules for remote focus, safe areas, and text contrast, and checked color pairs against WCAG AA before handoff."
        ],
        id: [
          "Merancang 128 layar 1920x1080: beranda, rincian tayangan, profil, Daftar Saya, unduhan, artikel, dan SosokPedia.",
          "Membangun dan mendokumentasikan design system untuk mobile dan TV: 49 color style, 58 text style, dan 140 komponen dengan varian untuk empat tema.",
          "Menuliskan aturan TV untuk fokus remote, area aman layar, dan kontras teks, serta memeriksa pasangan warna terhadap WCAG AA sebelum serah terima."
        ]
      },
      decision: {
        en: "Nobody wants to type a password with a remote. The TV shows a code, and the user <span>confirms it on the website</span> instead.",
        id: "Tidak ada yang mau mengetik kata sandi dengan remote. TV menampilkan kode, lalu pengguna cukup <span>mengonfirmasinya di website</span>."
      },
      shots: [
        { src: "tv-home", cls: "", cap: { en: "Home with continue watching.", id: "Beranda dengan lanjutkan menonton." } },
        { src: "tv-pair", cls: "half", cap: { en: "Sign in with a QR code or email code.", id: "Masuk dengan kode QR atau kode email." } },
        { src: "tv-detail", cls: "half", cap: { en: "Title detail.", id: "Rincian tayangan." } }
      ]
    },
    {
      slug: "mediease", title: "MediEase", year: "2025", cover: null,
      when: { en: "Nov 2025 - Apr 2026", id: "Nov 2025 - Apr 2026" },
      stack: "Figma, Notion, Google Docs, Trello",
      kind: { en: "Health-tech PRD, bootcamp capstone", id: "PRD health-tech, capstone bootcamp" },
      role: { en: "Product Manager (Harisenin bootcamp)", id: "Product Manager (bootcamp Harisenin)" },
      kicker: { en: "Product requirements for an app that makes booking a doctor simpler", id: "Kebutuhan produk untuk aplikasi yang mempermudah reservasi dokter" },
      context: {
        en: ["Booking a doctor is fragmented: patients check schedules in one place, read health information in another, and decide what to do next on their own. MediEase set out to bring those steps together."],
        id: ["Reservasi dokter masih terpecah: pasien mengecek jadwal di satu tempat, membaca informasi kesehatan di tempat lain, lalu memutuskan langkah berikutnya sendiri. MediEase dirancang untuk menyatukan langkah-langkah itu."]
      },
      did: {
        en: [
          "Validated demand with competitive benchmarking, a survey, and user interviews with smartphone users aged 18 to 55 who had used health services.",
          "Found three needs: faster booking, clear doctor schedules, and a simple flow.",
          "Wrote the PRD: assumptions, MVP scope, prioritized features, user stories, acceptance criteria, out-of-scope list, roadmap, and quarterly OKRs.",
          "Ran a heuristic evaluation and rewrote the UX copy."
        ],
        id: [
          "Memvalidasi kebutuhan lewat competitive benchmarking, survei, dan wawancara dengan pengguna smartphone berusia 18 sampai 55 tahun yang pernah memakai layanan kesehatan.",
          "Menemukan tiga kebutuhan: booking lebih cepat, jadwal dokter yang jelas, dan alur yang sederhana.",
          "Menyusun PRD: asumsi, cakupan MVP, prioritas fitur, user story, acceptance criteria, daftar di luar cakupan, roadmap, dan OKR per kuartal.",
          "Melakukan evaluasi heuristik dan menulis ulang UX copy."
        ]
      },
      decision: {
        en: "Scope was the hard part. An <span>explicit out-of-scope list</span> kept the MVP on booking and stopped feature creep.",
        id: "Bagian tersulit adalah cakupan. <span>Daftar di luar cakupan</span> yang tegas menjaga MVP tetap fokus pada booking dan mencegah fitur melebar."
      },
      shots: []
    }
  ];

  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  let lang = UI[saved] ? saved : "en";
  const t = k => UI[lang][k] ?? UI.en[k] ?? k;
  const L = o => (o && typeof o === "object" && !Array.isArray(o) && ("en" in o)) ? (o[lang] ?? o.en) : o;

  /* Static copy */
  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    splitStatement();
    renderList();
    if (current) renderCase(current, false);
  }

  /* Statement split into words for the scroll-linked brightening */
  const stmt = $("[data-split]");
  let words = [];
  function splitStatement() {
    const text = stmt.textContent.trim();
    stmt.innerHTML = text.split(/\s+/).map(w => `<span class="w">${w}</span>`).join(" ");
    words = $$(".w", stmt);
    litWords();
  }
  function litWords() {
    if (reduce || !words.length) return;
    const r = stmt.getBoundingClientRect();
    const vh = innerHeight;
    const p = Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .35)));
    const n = p * words.length;
    words.forEach((w, i) => w.style.setProperty("--o", i < n - 1 ? 1 : i < n ? .18 + (n - i) * .82 : .18));
  }

  /* Project list */
  const list = $("#work-list");
  function typeCover(p) { return `<span class="preview__type">${p.title}</span>`; }
  function renderList() {
    list.innerHTML = WORK.map((p, i) => `
      <li class="row">
        <button type="button" class="row__btn" data-slug="${p.slug}" aria-haspopup="dialog">
          <span class="row__thumb" aria-hidden="true">${p.cover ? `<img src="${IMG}${p.cover}-sm.webp" alt="" loading="lazy" width="720" height="405">` : typeCover(p)}</span>
          <span class="row__n">${String(i + 1).padStart(2, "0")}</span>
          <span class="row__title">${p.title}</span>
          <span class="row__meta"><b>${L(p.kind)}</b>${p.year}</span>
        </button>
      </li>`).join("");
  }
  list.addEventListener("click", e => {
    const b = e.target.closest(".row__btn");
    if (b) location.hash = "work/" + b.dataset.slug;
  });

  /* Cursor-following preview with lag and a tilt from pointer speed */
  const pv = $(".preview"), pvIn = $(".preview__inner");
  if (finePointer && !reduce) {
    let x = 0, y = 0, cx = 0, cy = 0, active = null, raf = 0;
    const loop = () => {
      const dx = x - cx;
      cx += dx * .14; cy += (y - cy) * .14;
      const rot = Math.max(-8, Math.min(8, dx * .05));
      pv.style.transform = `translate3d(${cx - pv.offsetWidth / 2}px, ${cy - pv.offsetHeight / 2}px, 0) rotate(${rot}deg)`;
      raf = requestAnimationFrame(loop);
    };
    list.addEventListener("pointermove", e => { x = e.clientX; y = e.clientY; });
    list.addEventListener("pointerover", e => {
      const b = e.target.closest(".row__btn");
      if (!b || b.dataset.slug === active) return;
      active = b.dataset.slug;
      const p = WORK.find(w => w.slug === active);
      const node = document.createElement("div");
      node.innerHTML = p.cover ? `<img src="${IMG}${p.cover}-sm.webp" alt="">` : typeCover(p);
      const el = node.firstElementChild;
      pvIn.appendChild(el);
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("in")));
      while (pvIn.children.length > 3) pvIn.firstElementChild.remove();
      if (!pv.classList.contains("on")) { cx = x = e.clientX; cy = y = e.clientY; pv.classList.add("on"); if (!raf) loop(); }
    });
    list.addEventListener("pointerleave", () => {
      pv.classList.remove("on"); active = null;
      cancelAnimationFrame(raf); raf = 0;
    });
  }

  /* Case study dialog, driven by the URL hash so Back closes it */
  const dlg = $("#case"), body = $(".case__body", dlg), scroller = $(".case__scroll", dlg);
  let current = null, lastFocus = null;

  function img(src, alt, eager) {
    return `<div class="shot__img"><img src="${IMG}${src}.webp" alt="${alt}" ${eager ? "" : 'loading="lazy"'} onload="this.classList.add('ok')" onerror="this.parentNode.classList.add('err');this.parentNode.textContent='${t("imgFail")}'"></div>`;
  }
  function renderCase(p, scrollTop = true) {
    const i = WORK.indexOf(p), nx = WORK[(i + 1) % WORK.length];
    const facts = [
      [t("role"), L(p.role)], [t("when"), L(p.when)], [t("stack"), p.stack],
      p.url ? [t("link"), `<a href="${p.url}" target="_blank" rel="noopener">${p.url.replace("https://", "")}</a>`] : null
    ].filter(Boolean);
    const targets = p.targets ? `
      <section class="case__sec"><h3>${L(p.targetsNote)}</h3>
        <div class="targets">${L(p.targets).map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("")}</div>
      </section>` : "";
    const hero = p.cover ? `<figure class="case__hero">${img(p.cover, p.title, true)}</figure>` : "";
    body.innerHTML = `
      <p class="case__kicker">${L(p.kicker)}</p>
      <h2 class="case__title" id="case-title">${p.title}</h2>
      <dl class="case__facts">${facts.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join("")}</dl>
      ${hero}
      <section class="case__sec"><h3>${lang === "id" ? "Konteks" : "Context"}</h3><div>${L(p.context).map(x => `<p>${x}</p>`).join("")}</div></section>
      ${targets}
      <section class="case__sec"><h3>${lang === "id" ? "Yang saya kerjakan" : "What I did"}</h3><ul>${L(p.did).map(x => `<li>${x}</li>`).join("")}</ul></section>
      <p class="case__quote">${L(p.decision)}</p>
      ${p.shots.some(s => s.src !== p.cover) ? `<div class="shots">${p.shots.filter(s => s.src !== p.cover).map(s => `<figure class="${s.cls}">${img(s.src, L(s.cap))}<figcaption>${L(s.cap)}</figcaption></figure>`).join("")}</div>` : ""}
      <button type="button" class="case__next" data-slug="${nx.slug}"><small>${t("next")}</small><strong>${nx.title}</strong></button>`;
    if (scrollTop) scroller.scrollTop = 0;
  }

  function openCase(slug) {
    const p = WORK.find(w => w.slug === slug);
    if (!p) return closeCase();
    const wasOpen = !!current;
    current = p;
    renderCase(p);
    if (!wasOpen) {
      lastFocus = document.activeElement;
      dlg.hidden = false;
      document.body.classList.add("case-open");
      requestAnimationFrame(() => requestAnimationFrame(() => dlg.classList.add("open")));
    }
    document.title = `${p.title}, Syahrul Irfan`;
    scroller.focus({ preventScroll: true });
  }
  function closeCase() {
    if (!current) return;
    current = null;
    dlg.classList.remove("open");
    document.body.classList.remove("case-open");
    document.title = "Syahrul Irfan, Product Manager";
    setTimeout(() => { if (!current) dlg.hidden = true; }, reduce ? 0 : 800);
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  function route() {
    const m = location.hash.match(/^#work\/(.+)$/);
    m ? openCase(m[1]) : closeCase();
  }
  addEventListener("hashchange", route);
  $(".case__close").addEventListener("click", () => { history.pushState("", "", location.pathname + "#work"); closeCase(); });
  body.addEventListener("click", e => { const b = e.target.closest(".case__next"); if (b) location.hash = "work/" + b.dataset.slug; });
  dlg.addEventListener("keydown", e => {
    if (e.key === "Escape") { $(".case__close").click(); return; }
    if (e.key !== "Tab") return;
    const f = $$("button, a[href]", dlg).filter(el => !el.disabled);
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* Language */
  $$(".lang button").forEach(b => b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    applyLang();
  }));

  /* Copy email */
  $("#copy-mail").addEventListener("click", async () => {
    const s = $("#copy-status");
    try { await navigator.clipboard.writeText("irfansyahrul782@gmail.com"); s.textContent = t("copied"); }
    catch (e) { s.textContent = t("copyFail"); }
    clearTimeout(s._t); s._t = setTimeout(() => { s.textContent = ""; }, 4000);
  });

  /* Hero key light follows the pointer */
  const hero = $(".hero");
  if (finePointer && !reduce) {
    hero.addEventListener("pointermove", e => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--lx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
      hero.style.setProperty("--ly", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    });
  }

  /* Reveal blocks once */
  const rv = $$(".about__body > *, .kit__group, .path li, .other, .contact > *");
  if (!reduce && "IntersectionObserver" in window) {
    rv.forEach(el => el.classList.add("rv"));
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("seen"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -10% 0px" });
    rv.forEach(el => io.observe(el));
  }

  const bar = $(".bar");
  const onScroll = () => { litWords(); bar.classList.toggle("solid", scrollY > innerHeight * .6); };
  addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });
  addEventListener("resize", litWords);

  applyLang();
  route();
  const done = () => document.body.classList.remove("is-loading");
  if (reduce) done(); else setTimeout(done, 1100);
})();
