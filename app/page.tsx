'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'


import {
  FaFacebook,
  FaYoutube,
  FaInstagram
} from 'react-icons/fa'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Understand your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Talk to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Data safety ensured', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Funnels that convert', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const links = [
  { name: 'About', href: '/about' },
  { name: 'Internship program', href: '/about' },
  { name: 'Projects', href: '#' },
  { name: 'Youtube', href: 'https://youtube.com/@ar19n_99.9k?si=88OvcmwN22bPfqX' },
]

const stats = [
  { name: 'Projects done', value: '8' },
  { name: 'Advanced', value: 'Skill strength' },
  { name: 'MERN Stack', value: 'Specialization' },
  { name: 'Both Frontend and Backend', value: 'Stonger side' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  //modal

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
  });

  const handleUnavailableClick = (title: string) => {
    setModalContent({
      title,
      message:
        "An unexpected error occurred while accessing the database. Please try again, or report the issue if it persists.",
    });
    setIsModalOpen(true);
  };

  return (
    <header className="bg-gradient-to-r from-skyblue-300 to-purple-600 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ar19n</span>
            <Image
              src="/images/ar19n logo.jpg"
              alt="Company logo"
              width={32}
              height={32}
              style={{height:'60px',width:'auto', borderRadius:'30px'}}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-purple-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-2xl font-semibold text-white-900 transform transition-transform duration-350 ease-in-out hover:scale-150">
              Menu
              <ChevronDownIcon className="h-5 w-5 text-white-500" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel className="absolute top-full left-0 z-50 mt-3 w-screen max-w-md rounded-3xl bg-gray-900 shadow-lg ring-1 ring-gray-900/10">
              <div className="p-4 space-y-2">
  <div className="group relative flex items-start gap-x-4 rounded-lg p-4 hover:bg-purple-900 transform transition-transform duration-200 ease-in-out hover:scale-110">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
      <ChartPieIcon className="h-6 w-6" aria-hidden="true" />
    </div>
    <div>
      <Link href="#" className="block font-semibold text-white-900">
        Analytics
        <span className="absolute inset-0" />
      </Link>
      <p className="mt-1 text-sm text-gray-600">Understand your traffic</p>
    </div>
  </div>

  <div className="group relative flex items-start gap-x-4 rounded-lg p-4 hover:bg-purple-900 transform transition-transform duration-200 ease-in-out hover:scale-110">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
      <CursorArrowRaysIcon className="h-6 w-6" aria-hidden="true" />
    </div>
    <div>
      <Link href="#" className="block font-semibold text-white-900">
        Engagement
        <span className="absolute inset-0" />
      </Link>
      <p className="mt-1 text-sm text-gray-600">Talk to your customers</p>
    </div>
  </div>

  <div className="group relative flex items-start gap-x-4 rounded-lg p-4 hover:bg-purple-900 transform transition-transform duration-200 ease-in-out hover:scale-110">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
      <FingerPrintIcon className="h-6 w-6" aria-hidden="true" />
    </div>
    <div>
      <Link href="#" className="block font-semibold text-white-900">
        Security
        <span className="absolute inset-0" />
      </Link>
      <p className="mt-1 text-sm text-gray-600">Data safety ensured</p>
    </div>
  </div>

  <div className="group relative flex items-start gap-x-4 rounded-lg p-4 hover:bg-purple-900 transform transition-transform duration-200 ease-in-out hover:scale-110">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
      <SquaresPlusIcon className="h-6 w-6" aria-hidden="true" />
    </div>
    <div>
      <Link href="#" className="block font-semibold text-white-900">
        Integrations
        <span className="absolute inset-0" />
      </Link>
      <p className="mt-1 text-sm text-gray-600">Connect with tools</p>
    </div>
  </div>
</div>

            </PopoverPanel>
          </Popover>

          {['About', 'Experience', 'Company'].map((item) => (
            <Link
              key={item}
              href="/about"
              className="text-lg font-semibold text-white-900 transform transition-transform duration-350 ease-in-out hover:scale-150"
            >
              {item}
            </Link>
          ))}
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-sm font-semibold text-white-900 transform transition-transform duration-350 ease-in-out hover:scale-150">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ar19n</span>
             <Image
              src="/images/ar19n logo.jpg"
              alt="Company logo"
              width={32}
              height={32}
              style={{height:'60px',width:'auto', borderRadius:'30px'}}
            />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-purple-100 transform transition-transform duration-200 ease-in-out hover:scale-110">
                    Menu
                    <ChevronDownIcon className="h-5 w-5 text-purple-400 group-data-open:rotate-180" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-purple-100 transform transition-transform duration-200 ease-in-out hover:scale-110"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                {['About', 'Experience', 'Company'].map((item) => (
                  <Link
                    key={item}
                    href="/about"
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-purple-100 transform transition-transform duration-200 ease-in-out hover:scale-110"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link href="/login" className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-purple-100 transform transition-transform duration-200 ease-in-out hover:scale-110">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      
      {/* //about section */}

    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Background image */}
      <Image
        alt=""
        src="/images/laptop.jpg"
        fill
 className="absolute inset-0 -z-10 object-cover object-center blur-sm"
         priority
      />

      {/* Decorative blur shapes */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          className="aspect-[1097/845] w-[68.56rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <div
          className="aspect-[1097/845] w-[68.56rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
       <div className="text-5xl font-semibold tracking-tight text-white sm:text-6xl leading-snug">
  <TypeAnimation
    sequence={[
      'I am Aromal',
      1000,
      'I am Aromal\nFull Stack Developer',
      2000,
      '',
      500,
    ]}
    wrapper="h2"
    cursor={true}
    repeat={Infinity}
    className="whitespace-pre-line"
  />
</div>


          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
          I&apos;m a motivated and detail-oriented Full Stack Developer, proudly from the beautiful city of Kollam in Kerala, with hands-on experience building scalable web and mobile applications.          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

{/* cards section */}

<section className="bg-gray-900 py-20 px-6 relative">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
          <div className="bg-gray-800 max-w-md w-full p-6 rounded-[40px] shadow-xl relative text-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-4 text-white-500 hover:text-red-800 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold text-white-800 mb-2">
              {modalContent.title}
            </h2>
            <p className="text-white-600">{modalContent.message}</p>
          </div>
        </div>
      )}

      {/* Section Title */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          A selection of work showcasing my skills in MERN stack development
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Project 1 */}
        <Link href="https://puzzle-gamma-five.vercel.app">
          <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="relative w-full h-55"> {/* height defined + relative */}
               <Image
                  src="/images/tom.jpg"
                 alt="Game"
                 fill
                 className="object-cover rounded-xl"
                  />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2">Image Puzzle</h3>
              <p className="text-gray-400 text-sm">
                A responsive Puzzle game built using React Native and Expo
                which focuses both iOS and Android platform to showcase my work
                and skills.<br></br>Note: For better experience use a mobile
                screen
              </p>
            </div>
          </div>
        </Link>
          {/* Project 6 */}
        <Link href="https://ball-one.vercel.app/">
        <div
          className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <div className="relative h-55 w-full">
            <Image
              src="/images/ballgame.jpg"
              alt="Hospital management"
              width={400}
               height={250}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Ball Shooter 	&#40;Mobile Game&#41;
            </h3>
            <p className="text-gray-400 text-sm">
             Ball Shooter is an interactive arcade-style web
              game built using Next.js, TypeScript, and the Canvas API. It also supports
                 touch controls for mobile providing a seamless experience
                   no matter how you play.
            </p>
          </div>
        </div>
        </Link>

        {/* Project 2 */}
        <Link href="https://hospm1.vercel.app/">
        <div
          className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <div className="relative h-55 w-full">
            <Image
              src="/images/hospital.jpg"
              alt="Hospital management"
              width={400}
               height={250}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Hospital Management
            </h3>
            <p className="text-gray-400 text-sm">
              A full-stack Hospital management system that enables seamless
              communication between patients and doctors through secure video
              calls.The system also support patient registration, appointment and scheduling.
            </p>
          </div>
        </div>
        </Link>

        {/* Project 3 */}
        <div
          onClick={() => handleUnavailableClick("Netflix Clone")}
          className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <div className="relative h-55 w-full">
            <Image
              src="/images/Netflix Indian Movies and Web Series.jpg"
              alt="Netflix clone"
              width={400}
               height={250}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Netflix Clone
            </h3>
            <p className="text-gray-400 text-sm">
              A Netflix clone made with Express.js and TMDB API to fetch real
              time movies with a responsive and modern touch
            </p>
          </div>
        </div>
        {/* Project 4 */}
        <Link href="https://cargamea1.vercel.app/">
        <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="relative h-55 w-full">
            <Image
              src="/images/front page car.jpg"
              alt="Black Street X"
              width={400}
               height={250}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Black Street X
            </h3>
            <p className="text-gray-400 text-sm">
              A fun 3D car game using Next.js and React Three Fiber. 
              It runs right in the browser and uses GLTF models for the cars
               and environment to keep things looking smooth and realistic. 
               You can drive around and enjoy real-time 
               3D graphics.
            </p>
          </div>
        </div>
       </Link>
       {/* Project 5 */}
        <Link href="https://plurtaskm4.vercel.app/">
        <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="relative h-50 w-full">
            <Image
              src="/images/todo1.jpg"
              alt="todo"
              width={400}
               height={250}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Plur Task 
            </h3>
            <p className="text-gray-400 text-sm">
              PlurTask is a lightweight, well-optimized to-do application designed 
              for speed, simplicity, and productivity. With a sleek user interface 
              and smooth performance, whether you&#39;re organizing your 
              daily routine or planning long-term goals, PlurTask helps you stay
               focused with a seamless task management experience.
            </p>
          </div>
        </div>
       </Link>
      </div>
    </section>


{/* footer */}


    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Details</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Docs</a></li>
            <li><a href="#" className="hover:text-white">API</a></li>
            <li><a href="#" className="hover:text-white">Tutorials</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebook style={{fontSize:'25px'}}/></a>
            <a href="https://youtube.com/@ar19n_99.9k?si=88OvcmwN22bPfqX" className="hover:text-white"><FaYoutube style={{fontSize:'25px'}}/></a>
            <a href="#" className="hover:text-white"><FaInstagram style={{fontSize:'25px'}}/></a>

          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 text-center text-sm text-gray-500">
        &copy; 2025 ar19n. All rights reserved.
      </div>
    </footer>


    </header>
  )
}

