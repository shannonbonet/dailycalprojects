import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { theme } from '../styles/theme';
import WaterPlot from '../visuals/redlining-charts/scatterplots/waterPlot';
import ChemPlot from '../visuals/redlining-charts/scatterplots/chemPlot';
import HealthPlot from '../visuals/redlining-charts/scatterplots/healthPlot';
import EconPlot from '../visuals/redlining-charts/scatterplots/econPlot';
import RedlineMap from '../visuals/redlining-charts/map-materials/map';
import GuideMap from '../visuals/guide-visuals/guideMap';
import HateBar from '../visuals/hate-charts/hateBar';
import HateLine from '../visuals/hate-charts/hateLine';
import LunchChart from '../visuals/rent-shelter-visuals/berkeleyAlamedaLunch';
import RentChart from '../visuals/rent-shelter-visuals/berkeleyAlamedaRent';
import BerkeleyShelterChart from '../visuals/rent-shelter-visuals/berkeleyShelter';
import AlamedaShelterChart from '../visuals/rent-shelter-visuals/alamedaShelter';
import BUSDBlackEnrollment from '../visuals/exodus-visuals/BlackEnrollmentBUSD';
import DistrictMap from '../visuals/exodus-visuals/district-map-materials/districtMap';
import BlackPopulationCensus from '../visuals/exodus-visuals/BlackPopulationCensus';
import GymTotals from '../visuals/gym-pac-12-visuals/gymTotals';
import GymVault from '../visuals/gym-pac-12-visuals/gymVault';
import GymBars from '../visuals/gym-pac-12-visuals/gymBars';
import GymBeam from '../visuals/gym-pac-12-visuals/gymBeam';
import GymFloor from '../visuals/gym-pac-12-visuals/gymFloor';
import Timeline1921 from '../visuals/1921-visuals/1921Timeline';
import STEMEnrollmentLine from '../visuals/STEM-visuals/STEMLine';
import TurnoverMap from '../visuals/turnover-visuals/turnoverMap';
import StudyAbroadMap from '../visuals/study-abroad-visuals/studyAbroadMap';
import ArtifactsBarChart from '../visuals/artifacts-visuals/artifactsBarChart';
import ArtifactsPieChart from '../visuals/artifacts-visuals/artifactsPieChart';
import HSILineChart from '../visuals/HSI-visuals/HSILineChart';
import GapStackedBarChart from '../visuals/gap-visuals/gapStackedBarChart';
import ProposalsASE from '../visuals/bargaining-visuals/proposalsASE';
import ProposalsAR from '../visuals/bargaining-visuals/proposalsAR';
import ProposalsPostocs from '../visuals/bargaining-visuals/proposalsPostdocs';
import ProposalsSR from '../visuals/bargaining-visuals/proposalsSR';
import KutcherTimeline from '../visuals/kutcher-visuals/kutcherTimeline';

/*
To avoid using exact paths in MDX files, import your components here
and add them to the shortcodes list to be globally accessible.ß
To use a component in MDX, simply type <MyComponent />
Note: MDXProvider doesn't like parsing individual HTML elements followed
by an array of React components, so we must include them in the same array.
*/

const shortcodes = {
  // style MDX files for any html element here!!
  a: (props) => (
    <a {...props} style={{ textDecoration: 'underline', color: theme.palette.black }} />), // styles MDX hyperlinks
  p: (props) => <p {...props} style={{ color: theme.palette.black }} />,
  img: (props) => <img {...props} style={{ display: 'flex', flexDirection: 'column' }} />,
  // cap: (props) => <cap {...props} style={{ text:  }} />,
  WaterPlot,
  ChemPlot,
  HealthPlot,
  EconPlot,
  RedlineMap,
  GuideMap,
  HateBar,
  HateLine,
  LunchChart,
  RentChart,
  BerkeleyShelterChart,
  AlamedaShelterChart,
  BUSDBlackEnrollment,
  DistrictMap,
  BlackPopulationCensus,
  GymTotals,
  GymVault,
  GymBars,
  GymBeam,
  GymFloor,
  Timeline1921,
  STEMEnrollmentLine,
  TurnoverMap,
  StudyAbroadMap,
  ArtifactsBarChart,
  ArtifactsPieChart,
  HSILineChart,
  GapStackedBarChart,
  ProposalsASE,
  ProposalsAR,
  ProposalsSR,
  ProposalsPostocs,
  KutcherTimeline,
};

export default function Layout({ children }) {
  return (
    <MDXProvider
      components={shortcodes}
    >
      {children}
    </MDXProvider>
  );
}
