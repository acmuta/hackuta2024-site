import { LinkButton } from "@/components/Button";
import { HackTicket } from "@/components/Tickets/HackTicket";

import Link from "next/link";
import { Box } from "@/components/Box";
import { getEnhancedSession } from "@/lib/utils/server";
import { headers } from "next/headers";
import { WavyPattern } from "@/components/WavyPattern";
import GoogleMyMap from "@/components/GoogleMyMap";
import { FaqSection, getFaqs } from "./faq/utils";
import { MeetTheTeamSection } from "./MeetTheTeamSection";
import { AllTeams } from "./admin/organizers/OrganizerData";
import { LogoTicket, LogoTicketKind } from '@/components/Tickets/LogoTicket'

export default async function LandingPage() {
  const sponsors = [
		{
			companyName: 'Mouser Electronics',
			companyUrl: 'https://www.mouser.com/',
			imageUrl: '/images/Sponsors/mouser-electronics.svg',
			kind: 'Sponsor',
		},
		{
			companyName: 'UTA CSE Department',
			companyUrl:
				'https://www.uta.edu/academics/schools-colleges/engineering/academics/departments/cse',
			imageUrl: '/images/Sponsors/utacse.png',
			kind: 'Sponsor',
		},
		{
			companyName: 'StateFarm',
			companyUrl: 'https://www.statefarm.com/',
			imageUrl: '/images/Sponsors/State-Farm-Logo.png',
			kind: 'Sponsor',
		},
		{
			companyName: 'GitHub',
			companyUrl: 'https://github.com/',
			imageUrl: '/images/Sponsors/github.svg',
			kind: 'Sponsor',
		},
		{
			companyName: 'UTA ISO',
			companyUrl: 'https://www.uta.edu/security/',
			imageUrl: '/images/Sponsors/utaiso.png',
			kind: 'Sponsor',
		},
		{
			companyName: 'ACM UTA',
			companyUrl: 'https://acm.uta.edu',
			imageUrl: '/images/Sponsors/acmuta.png',
			kind: 'Sponsor',
		},
	]

	const partners = [
		{
			companyName: 'Major\xa0League Hacking',
			companyUrl: 'https://mlh.io/',
			imageUrl: '/images/Partners/mlh-logo-color-dark.svg',
			kind: 'Partner',
		},
		{
			companyName: 'Mathworks',
			companyUrl: 'https://www.mathworks.com/',
			imageUrl: '/images/Partners/mathworks.png',
			kind: 'Partner',
		},
		{
			companyName: 'Wolfram',
			companyUrl: 'https://www.wolfram.com/',
			imageUrl: '/images/Partners/wolfram.png',
			kind: 'Partner',
		},
		{
			companyName: 'Rosenfeld',
			companyUrl: 'https://rosenfeldmedia.com/',
			imageUrl: '/images/Partners/rosenfeld.png',
			kind: 'Partner',
		},
		{
			companyName: 'Standout Stickers',
			companyUrl: 'http://hackp.ac/mlh-StandOutStickers-hackathons',
			imageUrl: '/images/Partners/standout-stickers.png',
			kind: 'Partner',
		},
		{
			companyName: 'echo3D',
			companyUrl: 'https://www.echo3d.com',
			imageUrl: '/images/Partners/echo3d.png',
			kind: 'Partner',
		},
	]

	const specialThanks = [
		{
			companyName: 'HackUTD',
			companyUrl: 'https://hackutd.co/',
			imageUrl: '/images/SpecialThanks/hackutd.png',
			kind: 'SpecialThanks',
		},
		{
			companyName: 'HackTX',
			companyUrl: 'https://hacktx.com/',
			imageUrl: '/images/SpecialThanks/hacktx23.svg',
			kind: 'SpecialThanks',
		},
		{
			companyName: 'MOBI at UTA',
			companyUrl: 'https://mobi.uta.edu',
			imageUrl: '/images/SpecialThanks/mobi.png',
			kind: 'SpecialThanks',
		},
		{
			companyName: 'CSEC at UTA',
			companyUrl: 'https://utacsec.org',
			imageUrl: '/images/SpecialThanks/csec.png',
			kind: 'SpecialThanks',
		},
	]

  const faqs = await getFaqs();

  const { user } = getEnhancedSession(headers());

  const hackingDeadline = new Date("2024-10-08T12:00:00-05:00");

  const isHackingTimeOver = () => {
    const currentTime = new Date();
    const timeDifference = hackingDeadline.getTime() - currentTime.getTime();
    return timeDifference <= 0;
  };

  return (
    <Box
      direction="column"
      alignItems="center"
      justifyContent="start"
      gap=".5rem"
      className="mb-2"
    >
      {/* pages section-1  */}
      <div className="flex flex-col items-center justify-start gap-8 bg-hackuta-red bg-hackuta-pattern-transparent p-8 md:p-16 w-full min-h-max">
        <div className="flex flex-col items-center justify-start gap-8">
          <section className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl mx-[-8rem] font-heading text-white drop-shadow-hackuta">
              HackUTA 2024
            </h1>
            <div className="sm:text-lg font-rhd text-white font-semibold md:text-3xl tracking-wider uppercase gap-2 inline-block">
              <span className="select-none mx-2">
                ⎯<span className="hidden md:inline-block">⎯⎯⎯</span>
              </span>
              <span>The Greatest Show</span>
              <span className="select-none mx-2">
                ⎯<span className="hidden md:inline-block">⎯⎯⎯</span>
              </span>
            </div>
            <div className="font-rhm text-2xl my-4 tracking-wider uppercase">
              <span className="mr-2">📅</span>
              <span className="text-white">October 7-8, 2024</span>
            </div>
          </section>
          <div className="relative">
            {/* <div className="sm:block hidden absolute left-0 top-0 mt-[-3rem] ml-[-10rem] rotate-[-15deg] z-10">
								<div className="flex py-2 px-6 md:ml-12 bg-hackuta-darkblue text-white font-heading drop-shadow-hackuta">
									Don&apos;t miss out!
								</div>
								<CTAArrow
									className={'w-[50px] h-auto ml-24 mt-2 drop-shadow-hackuta'}
									aria-hidden
								/>
							</div> */}
            <HackTicket
              className="animate-[jump-shaking_0.5s_ease-in-out_1] my-8 drop-shadow-hackuta"
              user={user}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-1 md:gap-3">
            {!user?.applied && (
              <LinkButton href="/apply" className="text-2xl">
                Apply
              </LinkButton>
            )}
            {user?.applied && !isHackingTimeOver() && (
              <LinkButton href="/dashboard" className="text-2xl">
                Dashboard
              </LinkButton>
            )}
            {user?.applied && isHackingTimeOver() && (
              <LinkButton href="/devpost" className="text-2xl">
                Submit to Devpost
              </LinkButton>
            )}
            <LinkButton
              href="/discord"
              className="bg-hackuta-darkblue"
              kind="secondary"
            >
              Discord
            </LinkButton>
            <LinkButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQ5gopSj69iT5josqR7u5ztnebidDRo9h9F3gL5qduCHCTag/viewform?usp=sf_link"
              className="bg-hackuta-darkblue"
              kind="secondary"
            >
              Volunteer/Mentor
            </LinkButton>
          </div>
        </div>
      </div>



      {/* page section-2 */}
      {/* <Calendar events={events} /> */}
      <div className="flex flex-col items-center justify-start gap-8 bg-hackuta-red bg-hackuta-pattern-transparent p-8 md:p-16 w-full">
        <h2 className="flex flex-col items-center gap-2 font-heading drop-shadow-hackuta text-white text-4xl">
          Venue Map & Parking
          <WavyPattern className="w-32" strokeColor="rgb(0,0,0,.3)" />
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap flex-auto">
          <div className="flex flex-col items-center justify-start p-4 bg-hackuta-darkred rounded-lg">
            <GoogleMyMap />
            <div className="w-full flex justify-center items-center pt-4">
              <Link
                className="font-heading text-white no-underline mx-2 bg-black bg-opacity-20 px-2 py-1 rounded-lg text-lg hover:bg-opacity-10 transition-all"
                href="https://maps.app.goo.gl/bawAGAcqcNr4Bwcw6"
                target="_blank"
              >
                Google Maps
              </Link>
              <Link
                className="font-heading text-white no-underline mx-2 bg-black bg-opacity-20 px-2 py-1 rounded-lg text-lg hover:bg-opacity-10 transition-all"
                href="https://maps.apple.com/?ll=32.728052,-97.110779&q=Dropped%20Pin&t=m"
                target="_blank"
              >
                Apple Maps
              </Link>
              <Link
                className="font-heading text-white no-underline mx-2 bg-black bg-opacity-20 px-2 py-1 rounded-lg text-lg hover:bg-opacity-10 transition-all"
                href="/images/hackuta2023map.png"
                target="_blank"
              >
                PDF Map
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Page section-3 */}
      <FaqSection faqs={faqs} />

      {/* Page section-4 */}
      <MeetTheTeamSection organizers={AllTeams} />

      {/* Page section-5 */}
      <div className="flex flex-col items-center justify-center gap-8 bg-hackuta-red bg-hackuta-pattern-transparent p-8 md:p-16 w-full">
        <h2 className="flex flex-col items-center gap-2 font-heading drop-shadow-hackuta text-white text-4xl">
          Sponsors & Partners
          <WavyPattern className="w-32" strokeColor="rgb(0,0,0,.3)" />
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap flex-auto">
          {sponsors.map((company, index) => (
            <LogoTicket
              key={`${company.companyName}-${index}`}
              companyName={company.companyName}
              companyUrl={company.companyUrl}
              imageUrl={company.imageUrl}
              kind={company.kind as LogoTicketKind}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap flex-auto">
          {partners.map((company, index) => (
            <LogoTicket
              key={`${company.companyName}-${index}`}
              companyName={company.companyName}
              companyUrl={company.companyUrl}
              imageUrl={company.imageUrl}
              kind={company.kind as LogoTicketKind}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap flex-auto">
          {specialThanks.map((company, index) => (
            <LogoTicket
              key={`${company.companyName}-${index}`}
              companyName={company.companyName}
              companyUrl={company.companyUrl}
              imageUrl={company.imageUrl}
              kind={company.kind as LogoTicketKind}
            />
          ))}
        </div>
      </div>
    </Box>
  );
}
