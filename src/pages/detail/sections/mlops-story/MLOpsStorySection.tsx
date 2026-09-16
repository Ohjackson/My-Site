import {
  BarChart3,
  Cloud,
  GitMerge,
  PackageCheck,
  ShieldCheck,
  Store,
} from 'lucide-react';

type Language = 'ko' | 'en' | 'ja';

type LocalizedText = Record<Language, string>;

interface MLOpsStoryData {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  stages: Array<{
    title: LocalizedText;
    description: LocalizedText;
  }>;
  snapshotLabel: LocalizedText;
  snapshots: Array<{
    value: string;
    label: LocalizedText;
  }>;
  note: LocalizedText;
}

interface MLOpsStorySectionProps {
  data: MLOpsStoryData;
  language: Language;
  backgroundColor: string;
}

const stageIcons = [Store, ShieldCheck, GitMerge, PackageCheck, Cloud];

export function MLOpsStorySection({ data, language, backgroundColor }: MLOpsStorySectionProps) {
  return (
    <section className={`overflow-hidden px-6 py-20 md:px-8 ${backgroundColor}`}>
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary-200/70 bg-primary-900 px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-400/25 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-300">
              {data.eyebrow[language]}
            </p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                {data.title[language]}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-primary-100/80 md:text-lg">
                {data.description[language]}
              </p>
            </div>

            <ol className="mt-12 grid gap-3 md:grid-cols-5">
              {data.stages.map((stage, index) => {
                const Icon = stageIcons[index] ?? BarChart3;

                return (
                  <li
                    key={stage.title.en}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-primary-300/60 hover:bg-white/[0.1]"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-400/15 text-primary-200">
                        <Icon aria-hidden className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-primary-300/70">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                      {stage.title[language]}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary-100/70">
                      {stage.description[language]}
                    </p>
                  </li>
                );
              })}
            </ol>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/10 p-5 md:p-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-300">
                    {data.snapshotLabel[language]}
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-8">
                    {data.snapshots.map((snapshot) => (
                      <div key={`${snapshot.value}-${snapshot.label.en}`}>
                        <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                          {snapshot.value}
                        </div>
                        <div className="mt-1 max-w-48 text-sm leading-snug text-primary-100/65">
                          {snapshot.label[language]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="max-w-md rounded-xl border border-primary-300/20 bg-primary-400/10 px-4 py-3 text-xs leading-relaxed text-primary-100/70">
                  {data.note[language]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
