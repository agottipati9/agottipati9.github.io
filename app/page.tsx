import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Mail, LinkedinIcon, Twitter, FileText, Book, Video, Presentation, GraduationCap, FileDown } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex p-6 md:p-8">
          <div className="md:flex-shrink-0">
            <Image
              className="h-64 w-64 md:h-64 md:w-64 object-cover rounded-full mx-auto md:mx-0"
              src="/static/pic.JPG?height=256&width=256"
              alt="Profile"
              width={256}
              height={256}
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <div className="uppercase tracking-wide text-sm text-gray-600 font-semibold">Aashish Gottipati</div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">PhD Student @ UT Austin</h1>
            <p className="mt-2 text-lg md:text-xl text-gray-600">I am a third year PhD student, advised by Lili Qiu, at the University of Texas at Austin. My research interests include networked systems and planning.</p>
            <div className="mt-4 flex space-x-4">
              <Link href="mailto:agottipati@utexas.edu" aria-label="Email">
                <Mail className="h-6 w-6 md:h-8 md:w-8 text-gray-600 hover:text-gray-800" />
              </Link>
              <Link href="https://scholar.google.com/citations?user=fGbLPkAAAAAJ&hl=en&oi=ao" aria-label="Google Scholar">
                <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-gray-600 hover:text-gray-800" />
              </Link>
              <Link href="https://twitter.com/agottipati9" aria-label="Twitter">
                <Twitter className="h-6 w-6 md:h-8 md:w-8 text-gray-600 hover:text-gray-800" />
              </Link>
              <Link href="https://www.linkedin.com/in/aashish-gottipati-705aa717a" aria-label="LinkedIn">
                <LinkedinIcon className="h-6 w-6 md:h-8 md:w-8 text-gray-600 hover:text-gray-800" />
              </Link>
            </div>
          </div>
        </div>
        <Tabs defaultValue="research" className="w-full">
          <TabsList className="flex w-full bg-gray-100 border-t border-b border-gray-200">
            <TabsTrigger value="research" className="flex-1 text-base md:text-lg py-2 md:py-3 px-2 md:px-4 border-r border-gray-200 last:border-r-0 hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-b-gray-800">Research</TabsTrigger>
            <TabsTrigger value="about" className="flex-1 text-base md:text-lg py-2 md:py-3 px-2 md:px-4 border-r border-gray-200 last:border-r-0 hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-b-gray-800">About</TabsTrigger>
            <TabsTrigger value="cv" className="flex-1 text-base md:text-lg py-2 md:py-3 px-2 md:px-4 border-r border-gray-200 last:border-r-0 hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-b-gray-800">CV</TabsTrigger>
          </TabsList>
          <TabsContent value="research" className="p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">Recent Research Projects</h2>
            <ul className="space-y-6 md:space-y-8">
            <li key="1" className="flex items-start space-x-4">
                  <Book className="h-6 w-6 md:h-8 md:w-8 mt-1 text-gray-600" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">Balancing Generalization and Specialization: Offline Metalearning for Bandwidth Estimation
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg">Aashish Gottipati, Sami Khairy, Yasaman Hosseinkashi, Gabriel Mittag, Vishak Gopal, Francis Y. Yan, Ross Cutler</p>
                    <p className="text-gray-600 mb-2 text-base md:text-med"><em>Arxiv preprint</em></p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="https://arxiv.org/abs/2409.19867" aria-label="Research paper" className="flex items-center text-gray-600 hover:text-gray-800">
                        <FileText className="h-5 w-5 md:h-6 md:w-6 mr-1" /> Paper
                      </Link>
                      <Link href="#" aria-label="Presentation slides" className="flex items-center text-gray-600 hover:text-gray-800">
                        <Presentation className="h-5 w-5 md:h-6 md:w-6 mr-1" /> Slides
                      </Link>
                      <Link href="#" aria-label="Video presentation" className="flex items-center text-gray-600 hover:text-gray-800">
                        <Video className="h-5 w-5 md:h-6 md:w-6 mr-1" /> Video
                      </Link>
                    </div>
                  </div>
                </li>
                <li key="2" className="flex items-start space-x-4">
                  <Book className="h-6 w-6 md:h-8 md:w-8 mt-1 text-gray-600" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">LLM-ABR: Designing Adaptive Bitrate Algorithms via Large Language Models</h3>
                    <p className="text-gray-600 text-base md:text-lg">Zhiyuan He, Aashish Gottipati, Lili Qiu, Francis Y. Yan, Xufang Luo, Kenuo Xu, Yuqing Yang</p>
                    <p className="text-gray-600 mb-2 text-base md:text-med">HotNets &apos;24</p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="https://arxiv.org/abs/2404.01617" aria-label="Research paper" className="flex items-center text-gray-600 hover:text-gray-800">
                        <FileText className="h-5 w-5 md:h-6 md:w-6 mr-1" /> Paper
                      </Link>
                      <Link href="#" aria-label="Presentation slides" className="flex items-center text-gray-600 hover:text-gray-800">
                        <Presentation className="h-5 w-5 md:h-6 md:w-6 mr-1" /> Slides
                      </Link>
                      <Link href="#" aria-label="Video presentation" className="flex items-center text-gray-600 hover:text-gray-800">
                        <Video className="h-5 w-5 md:h-6 md:w-6 mr-1" /> Video
                      </Link>
                    </div>
                  </div>
                </li>
                <li key="3" className="flex items-start space-x-4">
                  <Book className="h-6 w-6 md:h-8 md:w-8 mt-1 text-gray-600" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">Offline to Online Learning for Real-Time Bandwidth Estimation</h3>
                    <p className="text-gray-600 text-base md:text-lg">Aashish Gottipati, Sami Khairy, Gabriel Mittag, Vishak Gopal, Ross Cutler</p>
                    <p className="text-gray-600 mb-2 text-base md:text-med"><em>Arxiv preprint</em></p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="https://arxiv.org/abs/2309.13481" aria-label="Research paper" className="flex items-center text-gray-600 hover:text-gray-800">
                        <FileText className="h-5 w-5 md:h-6 md:w-6 mr-1" /> Paper
                      </Link>
                      <Link href="#" aria-label="Presentation slides" className="flex items-center text-gray-600 hover:text-gray-800">
                        <Presentation className="h-5 w-5 md:h-6 md:w-6 mr-1" /> Slides
                      </Link>
                      <Link href="#" aria-label="Video presentation" className="flex items-center text-gray-600 hover:text-gray-800">
                        <Video className="h-5 w-5 md:h-6 md:w-6 mr-1" /> Video
                      </Link>
                    </div>
                  </div>
                </li>
            </ul>
          </TabsContent>
          <TabsContent value="about" className="p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">About Me</h2>
            <div className="space-y-4 text-base md:text-lg text-gray-600">
              <p>In my free time, I like to go for runs, read a nice book, and hangout with my dogs.</p>
            </div>
          </TabsContent>
          <TabsContent value="cv" className="p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">Curriculum Vitae</h2>
            <p className="mb-4 md:mb-6 text-base md:text-lg text-gray-600">You can download my full CV using the button below:</p>
            <Button asChild className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              <Link href="./static/resume.pdf" download>
                <FileDown className="mr-2 h-5 w-5" /> Download CV
              </Link>
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}