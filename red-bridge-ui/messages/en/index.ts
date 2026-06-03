import v2Home from './v2/home.json';
import v2Shared from './v2/shared.json';
import v2About from './v2/about.json';
import v2Services from './v2/services.json';
import v2Employers from './v2/employers.json';
import v2Success from './v2/success.json';
import v2Faq from './v2/faq.json';
import aboutCta from './about/aboutCta.json';
import aboutEmployer from './about/aboutEmployer.json';
import aboutLegal from './about/aboutLegal.json';
import aboutStory from './about/aboutStory.json';
import aboutTeam from './about/aboutTeam.json';
import aboutUs from './about/aboutUs.json';
import aboutValues from './about/aboutValues.json';
import bookingFormPage from './book-form/page.json';
import contactPage from './contact/page.json';
import faqPage from './faq/page.json';
import employerCta from './for-employers/employerCta.json';
import employerDifference from './for-employers/employerDifference.json';
import employerEnquiry from './for-employers/employerEnquiry.json';
import employerFaq from './for-employers/employerFaq.json';
import employerFees from './for-employers/employerFees.json';
import employerObligations from './for-employers/employerObligations.json';
import employerPartnership from './for-employers/employerPartnership.json';
import employerProcess from './for-employers/employerProcess.json';
import employerWhy from './for-employers/employerWhy.json';
import employerServiceIntro from './for-employers/employerServiceIntro.json';
import home from './home/home.json';
import homeCaseStudy from './home/homeCaseStudy.json';
import homeContact from './home/homeContact.json';
import homeEmployerNetwork from './home/homeEmployerNetwork.json';
import homeVideo from './home/homeVideo.json';
import homehero from './home/homehero.json';
import employerPathwayCta from './services/employer-pathway/cta.json';
import employerPathwayFaq from './services/employer-pathway/faq.json';
import employerPathwayHero from './services/employer-pathway/hero.json';
import employerPathwayIndustries from './services/employer-pathway/industries.json';
import employerPathwayPathways from './services/employer-pathway/pathways.json';
import employerPathwayPaymentNode from './services/employer-pathway/payment-node.json';
import employerPathwayPromise from './services/employer-pathway/promise.json';
import employerPathwayReviewed from './services/employer-pathway/reviewed.json';
import employerPathwaySpokes from './services/employer-pathway/spokes.json';
import sharedComparison from './shared/comparison.json';
import sharedFooter from './shared/footer.json';
import insightIdeaLinkBar from './shared/insightIdeaLinkBar.json';
import navBar from './shared/navBar.json';
import successCasesCta from './success-cases/successCasesCta.json';
import successCasesHero from './success-cases/successCasesHero.json';
import successCasesList from './success-cases/successCasesList.json';
import successCasesWhy from './success-cases/successCasesWhy.json';

type Obj = Record<string, unknown>;

function deepMerge(target: Obj, source: Obj): Obj {
  const result = { ...target };
  for (const [key, value] of Object.entries(source)) {
    const existing = result[key];
    result[key] =
      existing !== null && typeof existing === 'object' && !Array.isArray(existing) &&
      value !== null && typeof value === 'object' && !Array.isArray(value)
        ? deepMerge(existing as Obj, value as Obj)
        : value;
  }
  return result;
}

const allMessages: Obj[] = [
  v2Home, v2Shared, v2About, v2Services, v2Employers, v2Success, v2Faq,
  aboutCta, aboutEmployer, aboutLegal, aboutStory, aboutTeam, aboutUs, aboutValues,
  bookingFormPage,
  contactPage, faqPage,
  employerCta, employerDifference, employerEnquiry, employerFaq, employerFees,
  employerObligations, employerPartnership, employerProcess, employerWhy, employerServiceIntro,
  home, homeCaseStudy, homeContact, homeEmployerNetwork, homeVideo, homehero,
  employerPathwayCta, employerPathwayFaq, employerPathwayHero,
  employerPathwayIndustries, employerPathwayPathways, employerPathwayPaymentNode,
  employerPathwayPromise, employerPathwayReviewed, employerPathwaySpokes,
  sharedComparison, sharedFooter, insightIdeaLinkBar, navBar,
  successCasesCta, successCasesHero, successCasesList, successCasesWhy,
];

export default allMessages.reduce((acc, msg) => deepMerge(acc, msg as Obj), {} as Obj);
