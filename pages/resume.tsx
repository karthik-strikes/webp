import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import MainLayout from '@/layouts/MainLayout'
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
      </div>
      {resumeau && (
        <MDXLayoutRenderer layout={resumeau.layout || DEFAULT_LAYOUT} content={resumeau} />
      )}
    </MainLayout>
  )
}
