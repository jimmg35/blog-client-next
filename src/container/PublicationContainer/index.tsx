import React from 'react'
import Gallery from './Gallery'
import Article from './Gallery/Article'
import Section from './Gallery/Section'
import Header from './Header'

const PublicationContainer = () => {
  return (
    <main className="">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <Header />

              <Gallery>
                <Section category={'Journal'}>
                  <Article
                    title="An Approach Integrating Spatial Factors via Convolutional Operations in Artificial Neural Network: Real Estate Appraisal as Case Study."
                    event="Journal of Geographical Research. (Accepted)"
                    description={
                      <span>
                        <span className="font-extrabold">Chang J. J.</span>,
                        Chang K. C.
                      </span>
                    }
                  />
                  <Article
                    title="Estimation of space-time traffic corridor earthquake risk exposure based on cellular trajectory data."
                    event="Journal of Geographical Research, 74(105-141)."
                    description={
                      <span>
                        Chen Y. J.,
                        <span className="font-extrabold">Chang J. J.</span>,
                        Chang K. C.
                      </span>
                    }
                  />
                </Section>
                <Section category={'Conference'}>
                  <Article
                    title="Semi-supervised Generative Adversarial Network for Identifying Cellphone Crop Images."
                    event="2023 Taiwan Geographic Information Society Annual Conference and Academic Symposium."
                    description={
                      <span>
                        <span className="font-extrabold">Chang J. J.</span>,
                        Chang K. C.
                      </span>
                    }
                  />
                  <Article
                    title="Constructing a Multi-temporal PM2.5 Estimation Model Using Temporal Geographically Weighted Regression."
                    event="2021 Taiwan Geographic Information Society Annual Conference and Academic Symposium."
                    description={
                      <span>
                        <span className="font-extrabold">Chang J. J.</span>,
                        Chen, C. H., Chang, K. C.
                      </span>
                    }
                  />
                  <Article
                    title="Convolutional Neural Networks for Crop Image Recognition Based on Transfer Learning."
                    event="2020 Taiwan Geographic Information Society Annual Conference and Academic Symposium."
                    description={
                      <span>
                        <span className="font-extrabold">Chang J. J.</span>,
                        Chang K. C.
                      </span>
                    }
                  />
                </Section>
                <Section category={'Presentations'}>
                  <Article
                    title="Using Convolution Neural Network as Environmental Features Extraction Pipeline – taken Real Estate Appraisal as a precedent."
                    event="2023 Association of American Geographers, Denver, CO."
                    description={
                      <span>
                        <span className=" font-extrabold">Chang J. J.</span>
                      </span>
                    }
                  />
                </Section>
              </Gallery>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PublicationContainer
