const businessAreas = [
  {
    title: "Mekanikal",
    description:
      "Bidang usaha meliputi penyediaan cable tray, custom bentuk alat dan support jasa pengelasan hingga pergantian panel atau alat otomasi.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2c-.4 0-.8 0-1.2.1l-.7 2.7c-.2.1-.4.2-.5.4l-2.5-.4-1.6 2.7 1.6 1.4c-.1.4-.1.8-.1 1.2s0 .8.1 1.2l-1.6 1.4 1.6 2.7 2.5-.4c.1.2.3.3.5.4l.7 2.7c.4.1.8.1 1.2.1s.8 0 1.2-.1l.7-2.7c.2-.1.4-.2.5-.4l2.5.4 1.6-2.7-1.6-1.4c.1-.4.1-.8.1-1.2s0-.8-.1-1.2l1.6-1.4-1.6-2.7-2.5.4c-.1-.2-.3-.3-.5-.4L13.2 2.1c-.4-.1-.8-.1-1.2-.1zM12 15.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Elektrikal",
    description:
      "Bidang usaha meliputi penarikan kabel power, pembuatan panel power distribusi, panel kontrol motor listrik, changeover switch, serta panel kontrol PLC.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 2L5 14h5v8l8-12h-5z" />
      </svg>
    ),
  },
  {
    title: "Pengadaan Material",
    description:
      "Kami menyediakan bahan penunjang sistem mekanik dan elektrikal berkualitas tinggi dengan harga bersaing agar proyek Anda berjalan efisien.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 7l9-4 9 4v10l-9 4-9-4V7zm9-1.2L5.5 10 12 13.3 18.5 10 12 5.8zM19 12l-7 3-7-3V9l7 3 7-3v3z" />
      </svg>
    ),
  },
  {
    title: "Sistem Otomasi",
    description:
      "Bidang usaha meliputi pembuatan alat otomasi berbasis PLC, pemrograman PLC/HMI/SCADA, serta instalasi sistem otomasi end-to-end.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="5" width="18" height="4" rx="2" fill="currentColor" />
        <rect x="3" y="15" width="18" height="4" rx="2" fill="currentColor" />
        <path
          d="M7 9v6M17 9v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Business = () => {
  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="bg-white dark:bg-midnight_text rounded-3xl lg:px-16 px-4 py-12 shadow-lg">
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            {/* <p className="text-14 uppercase tracking-[0.4em] text-muted dark:text-white">CV Kurnia Jaya Teknik</p> */}
            <h2 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white">
              <span className="text-primary">Bidang</span> Usaha
            </h2>
            <p className="text-base text-muted dark:text-white dark:text-opacity-70">4 Company Profile</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {businessAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white/5 dark:bg-midnight_text border border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                    {area.icon}
                  </div>
                  <h3 className="text-22 font-semibold text-midnight_text dark:text-white">
                    {area.title}
                  </h3>
                </div>
                <p className="text-muted dark:text-white dark:text-opacity-70 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center text-base text-midnight_text dark:text-white dark:text-opacity-70 max-w-3xl mx-auto">
            CV Kurnia Jaya Teknik hadir sebagai perusahaan mekanikal, elektrikal, sistem otomasi, perdagangan dan jasa lainnya yang selalu mengutamakan kualitas terbaik dan kepercayaan pelanggan.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;

