import ArrowIcon from '@/assets/Arrow.png';
import BrightnessSlider from '@/assets/Brightness.png';
import ContrastSlider from '@/assets/Contrast.png';
import JpgIcon from '@/assets/JPG.png';
import PaperImage from '@/assets/Paper.png';
import PdfIcon from '@/assets/PDF.png';
import SignOverlay from '@/assets/Sign.png';
import StampOverlay from '@/assets/Stamp.png';
import TxtIcon from '@/assets/TXT.png';
import AdvFiltersPhone from '@/assets/phones/AdvFiltersPhone.png';
import BatchScanPhone from '@/assets/phones/BatchScanPhone.png';
import DocumentPhone from '@/assets/phones/DocumentPhone.png';
import ExportSharePhone from '@/assets/phones/ExportSharePhone.png';
import SignStampPhone from '@/assets/phones/SignStampPhone.png';
import {
  AdvFilterIcon,
  BatchScanIcon,
  DocScannerIcon,
  ExportShareIcon,
  SignStampIcon,
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
    phoneImage: DocumentPhone,
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
    phoneImage: SignStampPhone,
    subTitle: 'One-Tap Focus',
    tabLabel: 'Sign & Stamp',
    title: 'SIGN & STAMP',
    overlayImages: [SignOverlay, StampOverlay],
  },
  {
    buttonText: 'Learn More',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    Icon: BatchScanIcon,
    id: 2,
    name: 'batch-scanning',
    paperImage: PaperImage,
    phoneImage: BatchScanPhone,
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
    phoneImage: AdvFiltersPhone,
    subTitle: 'Uniqe Filters',
    tabLabel: 'Advanced Filters',
    title: 'Advanced Filters',
    brightnessImage: BrightnessSlider,
    contrastImage: ContrastSlider,
  },
  {
    buttonText: 'Learn More',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    Icon: ExportShareIcon,
    id: 4,
    name: 'export-and-share',
    phoneImage: ExportSharePhone,
    subTitle: 'All-Round Conversion',
    tabLabel: 'Export & Share',
    title: 'Export & Share',
    exportIcons: [ArrowIcon, PdfIcon, JpgIcon, TxtIcon],
  },
];

export default FEATURES;
