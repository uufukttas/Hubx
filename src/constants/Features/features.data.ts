import ArrowIcon from '@/assets/Arrow.png';
import BrightnessSlider from '@/assets/Brightness.png';
import ContrastSlider from '@/assets/Contrast.png';
import PaperImage from '@/assets/Paper.png';
import SignOverlay from '@/assets/Sign.png';
import StampOverlay from '@/assets/Stamp.png';
import JpgIcon from '@/assets/jpg.png';
import PdfIcon from '@/assets/pdf.png';
import TxtIcon from '@/assets/txt.png';
import {
  DocScannerIcon,
  SignStampIcon,
  BatchScanIcon,
  AdvFilterIcon,
  ExportShareIcon,
} from '@/shared/components/icons';
import type { IFeature } from '@/types';

const FEATURES: IFeature[] = [
  {
    buttonText: 'Learn More',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
    Icon: DocScannerIcon,
    id: 0,
    name: 'document-scanner',
    phoneImage: 'src/assets/phones/DocumentPhone.png',
    subTitle: 'Scan with Ease',
    tabLabel: 'Document Scanner',
    title: 'Document Scanner',
  },
  {
    buttonText: 'Learn More',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    Icon: SignStampIcon,
    id: 1,
    name: 'sign-stamp',
    phoneImage: 'src/assets/phones/SignStampPhone.png',
    subTitle: 'One-Tap Focus',
    tabLabel: 'Sign & Stamp',
    title: 'SIGN & STAMP',
    overlayImages: [SignOverlay as string, StampOverlay as string],
  },
  {
    buttonText: 'Learn More',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    Icon: BatchScanIcon,
    id: 2,
    name: 'batch-scanning',
    paperImage: PaperImage as string,
    phoneImage: 'src/assets/phones/BatchScanPhone.png',
    subTitle: 'Multiple Page Scan',
    tabLabel: 'Batch Scanning',
    title: 'BATCH SCANNING',
  },
  {
    buttonText: 'Learn More',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    Icon: AdvFilterIcon,
    id: 3,
    name: 'advanced-filters',
    phoneImage: 'src/assets/phones/AdvFiltersPhone.png',
    subTitle: 'Uniqe Filters',
    tabLabel: 'Advanced Filters',
    title: 'Advanced Filters',
    brightnessImage: BrightnessSlider as string,
    contrastImage: ContrastSlider as string,
  },
  {
    buttonText: 'Learn More',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    Icon: ExportShareIcon,
    id: 4,
    name: 'export-and-share',
    phoneImage: 'src/assets/phones/ExportSharePhone.png',
    subTitle: 'All-Round Conversion',
    tabLabel: 'Export & Share',
    title: 'Export & Share',
    exportIcons: [
      ArrowIcon as string,
      PdfIcon as string,
      JpgIcon as string,
      TxtIcon as string,
    ],
  },
];

export default FEATURES;
