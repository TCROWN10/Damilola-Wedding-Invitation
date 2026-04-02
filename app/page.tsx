import CountdownTimer from "./CountdownTimer";
import PhotoGallery from "./PhotoGallery";
import CopyableField from "./CopyableField";

function HeartOutline({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function HeartSolid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function CaretDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function ChurchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L4 7v2h2v10h4v-5h4v5h4V9h2V7l-8-5z" />
      <path d="M12 8v2M10 12h4M12 10v4" />
    </svg>
  );
}

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" />
      <circle cx="8" cy="10" r="1.5" fill="currentColor" />
      <circle cx="14" cy="9" r="1.5" fill="currentColor" />
      <circle cx="10" cy="14" r="1.5" fill="currentColor" />
      <circle cx="16" cy="13" r="1.5" fill="currentColor" />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 12v10H4V12" />
      <rect x="2" y="7" width="20" height="5" rx="1" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Right-edge decorative strip (scrollbar area) */}
      <div
        className="fixed right-0 top-0 bottom-0 w-3 bg-[#f0e6e2] z-0"
        aria-hidden
      />

      {/* Top-right L-shaped corner decor */}
      <div
        className="fixed top-0 right-3 z-10 w-16 h-16 border-r border-b border-pink-light rounded-br-lg"
        aria-hidden
      />

      {/* Header */}
      <header className="relative z-10 flex items-start justify-between px-8 pt-8 md:px-12 md:pt-10">
        {/* Left: Logo + L-shaped line */}
        <div className="relative">
          <div className="font-serif text-foreground text-xl tracking-wide flex items-center gap-0.5">
            <span>R</span>
            <span className="text-pink text-lg leading-none">♥</span>
            <span>T</span>
          </div>
          <svg
            className="absolute -bottom-1 -right-1 text-pink-light"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M 0 0 L 0 24 Q 0 32 8 32 L 32 32" />
          </svg>
        </div>

        {/* Right: Navigation */}
        <nav className="flex items-center gap-6 md:gap-8 text-text-muted text-sm font-light tracking-[0.2em] uppercase">
          <a href="#" className="hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#events" className="hover:text-foreground transition-colors">
            Events
          </a>
          <a href="#dress-code" className="hover:text-foreground transition-colors">
            Dress Code
          </a>
          <a href="#gallery" className="hover:text-foreground transition-colors">
            Gallery
          </a>
          <a href="#gifts" className="hover:text-foreground transition-colors">
            Gifts
          </a>
        </nav>
      </header>

      {/* Main content - centered */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center py-16 px-6">
        {/* Central monogram circle + lines */}
        <div className="flex items-center justify-center gap-4 w-full max-w-xl mb-6">
          <span
            className="flex-1 h-px bg-pink-light max-w-[80px] opacity-80"
            aria-hidden
          />
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-pink-light flex items-center justify-center flex-col">
              <span className="font-serif text-foreground text-2xl tracking-tight">
                RT
              </span>
              <span className="text-pink text-xs leading-none mt-0.5">♥</span>
            </div>
          </div>
          <span
            className="flex-1 h-px bg-pink-light max-w-[80px] opacity-80"
            aria-hidden
          />
        </div>

        {/* We're getting married */}
        <p className="text-text-muted text-sm tracking-[0.4em] uppercase font-light mb-8">
          We&apos;re getting married
        </p>

        {/* Main names */}
        <h1 className="text-center mb-2">
          <span className="block font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
            Rebecca
          </span>
          <span className="block text-pink text-2xl md:text-3xl my-1 font-serif">
            &
          </span>
          <span className="block font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
            Timothy
          </span>
        </h1>

        {/* Full names */}
        <p className="text-text-muted text-sm md:text-base font-light tracking-wide mt-4 max-w-md text-center">
          Rebecca Oluwaseyi Aiyela & Timothy Olarewaju Adeoye
        </p>

        {/* Bottom hearts + lines */}
        <div className="flex items-center justify-center gap-3 w-full max-w-xs mt-12">
          <span
            className="flex-1 h-px bg-pink-light max-w-[60px] opacity-80"
            aria-hidden
          />
          <span className="flex items-center gap-1.5" aria-hidden>
            <HeartOutline className="w-4 h-4 text-pink" />
            <HeartSolid className="w-4 h-4 text-pink" />
            <HeartOutline className="w-4 h-4 text-pink" />
          </span>
          <span
            className="flex-1 h-px bg-pink-light max-w-[60px] opacity-80"
            aria-hidden
          />
        </div>
      </main>

      {/* Events section */}
      <section
        id="events"
        className="relative z-10 py-16 md:py-24 px-6 flex flex-col items-center"
      >
        {/* Section header hearts */}
        <div className="flex items-center justify-center gap-2 mb-12" aria-hidden>
          <HeartOutline className="w-4 h-4 text-accent-green" />
          <HeartOutline className="w-4 h-4 text-pink" />
          <HeartOutline className="w-4 h-4 text-pink" />
        </div>

        {/* Event date cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0 w-full max-w-2xl relative">
          {/* Connecting line between cards (visible on larger screens) */}
          <div
            className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-[280px] h-px bg-text-muted/40 z-0"
            aria-hidden
          />
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end pr-0 sm:pr-4 relative z-10">
            <div className="w-full max-w-[240px] rounded-2xl border border-accent-green/60 bg-white/50 py-6 px-6 text-center shadow-sm">
              <p className="text-accent-green text-xs font-light tracking-[0.2em] uppercase mb-2">
                Traditional
              </p>
              <p className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                March 27
              </p>
              <p className="text-text-muted text-sm font-light mt-1">2026</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-start pl-0 sm:pl-4 mt-6 sm:mt-0 relative z-10">
            <div className="w-full max-w-[240px] rounded-2xl border-2 border-pink bg-white/50 py-6 px-6 text-center shadow-sm">
              <p className="text-pink text-xs font-light tracking-[0.2em] uppercase mb-2">
                White Wedding
              </p>
              <p className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                March 28
              </p>
              <p className="text-text-muted text-sm font-light mt-1">2026</p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mt-10 text-foreground">
          <MapPinIcon className="w-5 h-5 text-pink shrink-0" />
          <span className="text-base font-light">Abuja, Nigeria</span>
        </div>

        {/* Bible verse */}
        <blockquote className="mt-14 max-w-xl text-center">
          <p className="font-serif text-foreground text-lg md:text-xl italic leading-relaxed">
            &ldquo;And now these three remain: faith, hope and love. But the greatest of these is love.&rdquo;
          </p>
          <cite className="not-italic block text-pink text-sm font-light mt-3">
            — 1 Corinthians 13:13
          </cite>
          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center text-pink-light hover:text-pink transition-colors"
            aria-label="Expand or view more"
          >
            <CaretDownIcon className="w-5 h-5" />
          </button>
        </blockquote>

        {/* Bottom decorative L-shaped corners */}
        <div
          className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-pink-light rounded-br-lg"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-3 w-16 h-16 border-r border-b border-pink-light rounded-bl-lg"
          aria-hidden
        />
      </section>

      {/* Join Us On Our Special Days - Schedule */}
      <section className="relative z-10 py-16 md:py-24 px-6 flex flex-col items-center">
        <p className="text-text-muted text-xs font-light tracking-[0.2em] uppercase mb-3">
          Mark your calendar
        </p>
        <h2 className="font-serif text-2xl md:text-4xl text-foreground text-center mb-8">
          Join Us On Our Special Days
        </h2>
        {/* Decorative line with calendar icon */}
        <div className="flex items-center justify-center gap-3 w-full max-w-sm mb-12">
          <span className="flex-1 h-px bg-pink-light" aria-hidden />
          <CalendarIcon className="w-8 h-8 text-pink shrink-0" />
          <span className="flex-1 h-px bg-pink-light" aria-hidden />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Top-left: Date card Friday 27 */}
          <div className="rounded-2xl bg-accent-green/20 border border-accent-green/40 py-8 px-6 flex flex-col items-center justify-center text-center shadow-sm">
            <p className="text-accent-green text-xs font-light tracking-[0.2em] uppercase mb-1">
              Friday
            </p>
            <p className="font-serif text-4xl md:text-5xl font-semibold text-foreground">27</p>
            <p className="text-text-muted text-sm font-light mt-1">March 2026</p>
          </div>

          {/* Top-right: Traditional Wedding */}
          <div className="rounded-2xl bg-white/80 shadow-sm py-6 px-6 flex flex-col">
            <HeartOutline className="w-6 h-6 text-accent-green mb-3 shrink-0" />
            <h3 className="font-serif text-foreground text-lg font-medium">Traditional Wedding</h3>
            <p className="text-text-muted text-sm font-light mt-1 leading-relaxed">
              A celebration of our rich cultural heritage and traditions.
            </p>
            <div className="mt-4 flex items-center gap-2 text-text-muted text-sm">
              <ClockIcon className="w-4 h-4 shrink-0" />
              <span>11:00 AM</span>
            </div>
            <div className="mt-2 flex items-start gap-2 text-sm">
              <MapPinIcon className="w-4 h-4 shrink-0 mt-0.5 text-foreground" />
              <span>
                <span className="font-medium text-foreground">Traditional Venue</span>
                <br />
                <span className="text-text-muted font-light">
                  Close to Block industry along forest road Bako, Abuja
                </span>
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Block+industry+forest+road+Bako+Abuja"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent-green text-accent-green py-2.5 px-4 text-sm font-light w-fit hover:bg-accent-green/10 transition-colors"
            >
              <MapPinIcon className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Bottom-left: White Wedding & Reception */}
          <div className="rounded-2xl bg-white/80 shadow-sm py-6 px-6 flex flex-col">
            <ChurchIcon className="w-6 h-6 text-pink mb-3 shrink-0" />
            <h3 className="font-serif text-foreground text-lg font-medium">
              White Wedding & Reception
            </h3>
            <p className="text-text-muted text-sm font-light mt-1 leading-relaxed">
              Holy matrimony followed by dinner and joyful celebration.
            </p>
            <div className="mt-4 flex items-center gap-2 text-text-muted text-sm">
              <ClockIcon className="w-4 h-4 shrink-0" />
              <span>11:00 AM</span>
            </div>
            <div className="mt-2 flex items-start gap-2 text-sm">
              <MapPinIcon className="w-4 h-4 shrink-0 mt-0.5 text-foreground" />
              <span>
                <span className="font-medium text-foreground">De Queens Event Center</span>
                <br />
                <span className="text-text-muted font-light">
                  FO1 Kubwa, Abuja (close to Daughters of Charity Hospital)
                </span>
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=De+Queens+Event+Center+Kubwa+Abuja"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-pink text-pink py-2.5 px-4 text-sm font-light w-fit hover:bg-pink/10 transition-colors"
            >
              <MapPinIcon className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Bottom-right: Date card Saturday 28 */}
          <div className="rounded-2xl bg-pink/15 border border-pink/40 py-8 px-6 flex flex-col items-center justify-center text-center shadow-sm">
            <p className="text-pink text-xs font-light tracking-[0.2em] uppercase mb-1">
              Saturday
            </p>
            <p className="font-serif text-4xl md:text-5xl font-semibold text-foreground">28</p>
            <p className="text-text-muted text-sm font-light mt-1">March 2026</p>
          </div>
        </div>
      </section>

      {/* What to Wear / Dress Code */}
      <section
        id="dress-code"
        className="relative z-10 py-16 md:py-24 px-6 flex flex-col items-center"
      >
        <PaletteIcon className="w-10 h-10 text-pink-light mb-4" aria-hidden />
        <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center font-semibold">
          What to Wear
        </h2>
        <p className="text-text-muted text-sm md:text-base font-light text-center max-w-lg mt-3 mb-10">
          We&apos;d love for our guests to dress in our wedding colors to make the celebration even
          more beautiful.
        </p>

        <div className="w-full max-w-xl rounded-2xl bg-white/80 shadow-sm border border-white/90 py-8 px-6 md:px-8">
          <p className="text-foreground text-xs font-light tracking-[0.2em] uppercase mb-6 text-center">
            Our wedding colors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-14 h-14 rounded-full border border-gray-300 bg-white"
                aria-hidden
              />
              <span className="text-foreground text-sm font-light">White</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#2e7d7d]" aria-hidden />
              <span className="text-foreground text-sm font-light">Sea Blue</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#c9a227]" aria-hidden />
              <span className="text-foreground text-sm font-light">Gold</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-pink" aria-hidden />
              <span className="text-foreground text-sm font-light">Pink</span>
            </div>
          </div>

          <div className="rounded-xl bg-pink-light/50 py-2.5 px-4 text-center mb-5">
            <span className="text-foreground text-sm font-medium">
              Dress Code: Formal / Semi-Formal
            </span>
          </div>
          <p className="text-foreground text-sm font-light leading-relaxed text-center">
            Ladies, flowing gowns or elegant dresses in white, sea blue, or gold are perfect.
            <br />
            <span className="mt-1 block">
              Gentlemen, suits or traditional attire in complementary colors are encouraged.
            </span>
          </p>
        </div>

        <p className="text-pink-light text-sm font-light text-center mt-8 flex items-center justify-center gap-1.5">
          <span aria-hidden>♥</span>
          Come dressed to celebrate love in style!
        </p>
      </section>

      {/* Photo Gallery */}
      <section
        id="gallery"
        className="relative z-10 py-16 md:py-24 px-6 flex flex-col items-center"
      >
        <p className="text-pink text-xs font-light tracking-[0.2em] uppercase mb-3">
          Our moments
        </p>
        <h2 className="font-serif text-2xl md:text-4xl text-foreground text-center font-semibold">
          Photo Gallery
        </h2>
        <div className="flex items-center justify-center gap-3 w-full max-w-sm my-6">
          <span className="flex-1 h-px bg-pink-light" aria-hidden />
          <CameraIcon className="w-8 h-8 text-pink shrink-0" />
          <span className="flex-1 h-px bg-pink-light" aria-hidden />
        </div>
        <p className="text-text-muted text-sm font-light text-center max-w-lg mb-10">
          A glimpse into our journey of love. Replace these with your own cherished memories.
        </p>
        <div className="w-full max-w-[320px] sm:max-w-[340px] mx-auto">
          <PhotoGallery />
        </div>
      </section>

      {/* Gift Registry */}
      <section
        id="gifts"
        className="relative z-10 py-16 md:py-24 px-6 flex flex-col items-center"
      >
        <p className="text-pink text-xs font-light tracking-[0.2em] uppercase mb-3">
          Your presence is our present
        </p>
        <h2 className="font-serif text-2xl md:text-4xl text-foreground text-center font-semibold">
          Gift Registry
        </h2>
        <GiftIcon className="w-8 h-8 text-pink mt-4 mb-10" aria-hidden />

        <div className="w-full max-w-2xl rounded-2xl bg-white/80 shadow-sm border border-white/90 py-8 px-6 md:px-10">
          <div className="flex justify-center mb-4">
            <span className="text-pink text-2xl" aria-hidden>♥</span>
          </div>
          <h3 className="font-serif text-foreground text-xl font-medium text-center mb-4">
            We&apos;ll Appreciate Cash Gifts
          </h3>
          <p className="text-text-muted text-sm font-light text-center leading-relaxed max-w-lg mx-auto mb-8">
            Your presence at our wedding is the greatest gift of all. However, if you wish to bless
            us with a gift, we would be grateful for contributions towards our future together as we
            begin this new chapter.
          </p>

          <p className="text-foreground text-xs font-light tracking-[0.15em] uppercase text-center mb-4">
            Bank Details
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
              <p className="text-pink text-xs font-light tracking-[0.2em] uppercase text-center mb-3">
                Timothy
              </p>
              <div>
                <p className="text-text-muted text-[10px] uppercase tracking-wider mb-1">Account Name</p>
                <CopyableField value="Timothy Olarewaju Adeoye" />
              </div>
              <div>
                <p className="text-text-muted text-[10px] uppercase tracking-wider mb-1">Bank Name</p>
                <CopyableField value="GTBank" />
              </div>
              <div>
                <p className="text-text-muted text-[10px] uppercase tracking-wider mb-1">Account Number</p>
                <CopyableField value="0286821804" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-pink text-xs font-light tracking-[0.2em] uppercase text-center mb-3">
                Rebecca
              </p>
              <div>
                <p className="text-text-muted text-[10px] uppercase tracking-wider mb-1">Account Name</p>
                <CopyableField value="Rebecca Oluwaseyi Aiyela" />
              </div>
              <div>
                <p className="text-text-muted text-[10px] uppercase tracking-wider mb-1">Bank Name</p>
                <CopyableField value="OPay" />
              </div>
              <div>
                <p className="text-text-muted text-[10px] uppercase tracking-wider mb-1">Account Number</p>
                <CopyableField value="7030154651" />
              </div>
            </div>
          </div>

          <blockquote className="text-center border-t border-pink-light/50 pt-6">
            <p className="text-text-muted text-sm font-serif italic leading-relaxed">
              Each of you should give what you have decided in your heart to give, not reluctantly
              or under compulsion, for God loves a cheerful giver.
            </p>
            <cite className="not-italic block text-text-muted text-xs font-light mt-2">
              – 2 Corinthians 9:7
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Countdown + RSVP section */}
      <section className="relative z-10 py-16 md:py-24 px-6 flex flex-col items-center">
        {/* Counting down header */}
        <p className="text-pink text-sm font-light tracking-[0.25em] uppercase flex items-center justify-center gap-2 mb-3">
          <span aria-hidden>♡</span>
          <span>Counting down</span>
          <span aria-hidden>♡</span>
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-10">
          Until We Say &ldquo;I Do&rdquo;
        </h2>

        {/* Countdown timer */}
        <CountdownTimer />

        {/* Add to Calendar */}
        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-pink text-white px-8 py-3 text-sm font-light tracking-wide shadow-sm hover:opacity-90 transition-opacity"
        >
          Add to Calendar
        </a>

        {/* RSVP */}
        <h3 className="font-serif text-foreground text-xl md:text-2xl uppercase tracking-wide mt-16 mb-3">
          RSVP
        </h3>
        <p className="text-text-muted text-sm font-light text-center max-w-md mb-8">
          For seat reservations and RSVP, please contact:
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl">
          <div className="w-full max-w-[260px] rounded-2xl bg-white/80 shadow-sm py-5 px-5 text-center">
            <p className="font-serif text-foreground font-medium">Mercy Aiyela</p>
            <a
              href="tel:+2347013007782"
              className="mt-2 inline-flex items-center justify-center gap-2 text-text-muted text-sm font-light hover:text-foreground transition-colors"
            >
              <PhoneIcon className="w-4 h-4 shrink-0" />
              +234 701 300 7782
            </a>
          </div>
          <div className="w-full max-w-[260px] rounded-2xl bg-white/80 shadow-sm py-5 px-5 text-center">
            <p className="font-serif text-foreground font-medium">Honour Adeoye</p>
            <a
              href="tel:+2347040397555"
              className="mt-2 inline-flex items-center justify-center gap-2 text-text-muted text-sm font-light hover:text-foreground transition-colors"
            >
              <PhoneIcon className="w-4 h-4 shrink-0" />
              +234 704 039 7555
            </a>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="mt-14 max-w-xl text-center rounded-2xl bg-white/50 shadow-sm py-8 px-6 md:px-8">
          <p className="font-serif text-foreground text-lg md:text-xl italic leading-relaxed">
            &ldquo;For everything there is a reason, and a time for every matter under heaven.&rdquo;
          </p>
          <cite className="not-italic block text-foreground text-sm font-light mt-3">
            — Ecclesiastes 3:1
          </cite>
        </blockquote>
      </section>

      {/* Footer / Designer credit */}
      <footer className="relative z-10 py-12 px-6 text-center border-t border-pink-light/50">
        <p className="text-text-muted text-sm font-light">
          Designed by{" "}
          <span className="text-foreground underline underline-offset-2">Tcrown</span>
        </p>
      </footer>
    </div>
  );
}
