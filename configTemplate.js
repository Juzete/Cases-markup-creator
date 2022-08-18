export const configTemplate = {
    titleTitleSection: '',
    headerImagePath: '',
    headerImageAlt: '',
    headerImageTitle: '',
    challengeSubtitle: '',
    solutionSubtitle: '',
    techStackSubtitle: '',
    subtitleClientSection: '',
    challengeSectionList: [],
    challengeImageAlt: '',
    challengeImageTitle: '',
}

//Intranet && Software for && Home Appliance && Manufacturer

export function createConfigTemplate () {
    return (
`import { theme } from '@/theme'
import Link from '@/ui/links/Link'
        
export const config = {
    titleTitleSection: (
        <>
            ${configTemplate.titleTitleSection}
        </>
    ),
    headerImagePath: '/images/${configTemplate.headerImagePath}-head.png.webp',
    headerImageAlt: '${configTemplate.headerImageAlt}',
    headerImageTitle: '${configTemplate.headerImageTitle}',
    technologies: [
        {
          id: 'Challenge',
          title: 'Challenge',
          subtitle:(
            <>
            ${configTemplate.challengeSubtitle}
            </>
          ),
          alt: 'Hexagon Image',
        },
        {
          id: 'Solution',
          title: 'Solution',
          subtitle: (
            <>
            ${configTemplate.solutionSubtitle}
            </>
          ),
          alt: 'Hexagon Image',
        },
        {
          id: 'Tech stack',
          title: 'Tech stack',
          subtitle: (
            <>
            ${configTemplate.techStackSubtitle}
            </>
          ),
          alt: 'Hexagon Image',
        },
      ],
      titleClient: 'Client',
    subtitleClientSection:(
    <>
        ${configTemplate.subtitleClientSection}
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
            ${configTemplate.subtitleClientSection}
          </>,
          value: ${configTemplate.challengeSectionList},
        },
      ],
      challengeImage: [
        ${configTemplate.challengeImageAlt ? 
        `{
            id: '${configTemplate.challengeImageTitle}',
            imagePath: '/images/${configTemplate.headerImagePath}-cart-view.png.webp',
            alt: '${configTemplate.challengeImageAlt}',
            imageTitle: '${configTemplate.challengeImageTitle}',
            width: '!!!',
            height: '!!!',
            rightPosition: !!!,
            bottomPosition: !!!,
            show: false,
            className: 'cart-view',
        },`
        : ''
        }
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
}`
)
}