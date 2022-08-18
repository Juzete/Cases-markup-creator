import { theme } from '@/theme'
import Link from '@/ui/links/Link'
        
export const config = {
    titleTitleSection: (
        <>
            Intranet <br /> Software for <br /> Home Appliance <br /> Manufacturer
        </>
    ),
    headerImagePath: '/images/intranet-software-for-home-appliance-manufacturer-head.png.webp',
    headerImageAlt: 'Intranet software',
    headerImageTitle: 'Intranet software',
    technologies: [
        {
          id: 'Challenge',
          title: 'Challenge',
          subtitle:(
            <>
            Inefficient document management in the large company due to the absence of an intranet portal for information exchange.
            </>
          ),
          alt: 'Hexagon Image',
        },
        {
          id: 'Solution',
          title: 'Solution',
          subtitle: (
            <>
            Custom software development for a corporate intranet based on SharePoint Online.
            </>
          ),
          alt: 'Hexagon Image',
        },
        {
          id: 'Tech stack',
          title: 'Tech stack',
          subtitle: (
            <>
            Java Script, ASP.NET, Database Management.
            </>
          ),
          alt: 'Hexagon Image',
        },
      ],
      titleClient: 'Client',
    subtitleClientSection:(
    <>
        A home appliance manufacturer based in Asia. The company numbers 10 000+ employees, as well as possesses a wide product distribution and service center networks worldwide.
    </>
    ),
    titleChallengeSection: (
        <>
          <span>Challenge:</span>
        </>
      ),
      challengeSectionList: [
        {
          title:
          <>
            A home appliance manufacturer based in Asia. The company numbers 10 000+ employees, as well as possesses a wide product distribution and service center networks worldwide.
          </>,
          value: ,
        },
      ],
      challengeImage: [
        
        {
          id: 'hexagon',
          imagePath: '/images/case-gray-half-hexagon.svg',
          alt: 'Gray Image',
          imageTitle: 'Gray Image',
          width: '177px',
          height: '340px',
          leftPosition: theme.spaces[0],
          bottomPosition: '-10',
          mobilePosition: 'absolute',
        },
        {
          id: 'empty hexagon',
          imagePath: '/images/emptyHexagon.svg',
          alt: 'empty hexagon',
          imageTitle: 'empty hexagon',
          width: '211px',
          height: '389px',
          rightPosition: theme.spaces[0],
          topPosition: 50,
          mobilePosition: 'absolute',
        },
      ],
}