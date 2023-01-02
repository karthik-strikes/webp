import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
//import resumeData from '@/data/resumeData'
import siteMetadata from '@/data/siteMetadata'
import MainLayout from '@/layouts/MainLayout'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { allAuthors } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

const DEFAULT_LAYOUT = 'ResumeLayout'

export const getStaticProps = async () => {
  const resumeau = allAuthors.find((p) => p.slug === 'resume')
  return { props: { resumeau } }
}

export default function Resume({ resumeau }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <PageSEO title={`Resume - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">
            Resume
          </a>
        </h1>
        {resumeau && (
          <MDXLayoutRenderer layout={resumeau.layout || DEFAULT_LAYOUT} content={resumeau} />
        )}
      </div>
    </MainLayout>
  )
}

// export default function Resume() {
//   return (
//     <MainLayout>

//       <PageSEO title={`Resume - ${siteMetadata.resumeau}`} description={siteMetadata.description} />
//       <div>
//         <div className="pt-6 pb-8 space-y-2 md:space-y-5 ">
//           <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
//             Resume
//           </h1>
//           <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">

//           </p>
//         </div>
//         <div className="container py-5">
//           <div className="flex flex-wrap -m-4 ">
//             {resumeData.map((d) => (
//               <Card
//                 key={d.title}
//                 title={d.title}
//                 description={d.description}
//                 imgSrc={d.imgSrc}
//                 href={d.href}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   )
// }
