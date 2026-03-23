import Image from "next/image";

const credentials = [
  "PMP",
  "Six Sigma Green Belt",
  "MS Org Change & PM",
  "TEDx Speaker",
];

export function ShortBio() {
  return (
    <section className="max-w-[1200px] mx-auto px-10 py-16">
      <div className="flex gap-6 items-start">
        <Image
          src="/avatar.png"
          alt="Jordan Eromonsele"
          width={80}
          height={80}
          className="rounded-full shrink-0"
        />
        <div>
          <p className="text-base font-extrabold mb-2">Jordan Eromonsele</p>
          <p className="text-[13px] text-brand-gray-600 leading-relaxed max-w-xl mb-4">
            Product and operations leader based in Dallas, TX. MS in
            Organizational Change &amp; Project Management. PMP. Lean Six Sigma
            Green Belt. TEDx speaker. I&apos;ve managed enterprise programs at a
            $100M+ company, produced for the world&apos;s most prestigious
            sculpture prize, and built data platforms from scratch. Currently
            building The Very Good Home Company and open to product leadership
            roles.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-brand-gray-600">
            {credentials.map((cred, i) => (
              <span key={cred}>
                {cred}
                {i < credentials.length - 1 && (
                  <span className="text-brand-gray-300 ml-4">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
