import Countdown from './Countdown.jsx';

export default function IntroSection() {

  return (
    <section
      className="relative min-h-screen overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url('/grooms.jpeg')`,
        }}

        className="absolute inset-0 md:bg-contain bg-cover bg-center"
      />

      <div className="absolute inset-0 bg-[#7B2E2E] opacity-40"></div>

      <div className="relative z-10 text-white py-20">
        <Countdown />
      </div>
    </section>
  );
}

