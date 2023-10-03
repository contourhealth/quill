import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import ChatText from '@/components/ChatText'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-14 sm:mt-14 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-10 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Contour is now hiring!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          On-demand virtual visits with your{' '}
          <ChatText
            strings={['care provider.', 'doctor.', 'nurse.', 'therapist.']}
          />{' '}
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Your virtual bridge to compassionate, accessible, and transformative
          palliative care at home.
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={2880}
                    height={2086}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-0 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-20 mt-32 max-w-5xl sm:mt-20">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-4 text-lg text-gray-600">Coming soon.</p>
          </div>
        </div>
      </div>
    </>
  )
}
