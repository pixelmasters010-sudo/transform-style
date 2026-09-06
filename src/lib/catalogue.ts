import p1a from "@/assets/p1-a.jpg";
import p1b from "@/assets/p1-b.jpg";
import p2a from "@/assets/p2-a.jpg";
import p2b from "@/assets/p2-b.jpg";
import p3a from "@/assets/p3-a.jpg";
import p3b from "@/assets/p3-b.jpg";
import p4a from "@/assets/p4-a.jpg";
import p4b from "@/assets/p4-b.jpg";
import p5a from "@/assets/p5-a.jpg";
import p5b from "@/assets/p5-b.jpg";
import p6a from "@/assets/p6-a.jpg";
import p6b from "@/assets/p6-b.jpg";
import p7a from "@/assets/p7-a.jpg";
import p8a from "@/assets/p8-a.jpg";
import onBody from "@/assets/hero-poster.jpg";
import j1 from "@/assets/journal-1.jpg";
import j2 from "@/assets/journal-2.jpg";
import j3 from "@/assets/journal-3.jpg";

export const HERO_VIDEO_URL =
  "/__l5e/assets-v1/9c2510cf-7f5c-4d8f-8d44-e871591138ca/hero-transform.mp4";

export type Category = "Shirts" | "Dresses" | "Convertible";

export type Product = {
  slug: string;
  name: string;
  price: number;
  categories: Category[];
  tagline: string;
  materials: string;
  images: string[];
  states: [string, string];
  description: string;
  transformation: string[];
  fit: string;
  care: string;
};

export const products: Product[] = [
  {
    slug: "marlow-shirt-dress",
    name: "Marlow Convertible Shirt",
    price: 385,
    categories: ["Shirts", "Convertible"],
    tagline: "A crisp poplin shirt that releases into a full-length shirt dress.",
    materials: "100% long-staple Egyptian cotton poplin, solid brass clasps",
    images: [p1a, p1b, onBody],
    states: ["Shirt", "Shirt dress"],
    description:
      "The Marlow is our founding piece. Worn buttoned, it is a clean, slightly oversized shirt for the working week. Release the six brass side clasps and the hidden lower panel drops into a full-length shirt dress — no re-dressing required.",
    transformation: [
      "Unhook the six brass clasps along each side seam.",
      "Let the concealed lower panel fall and smooth the front placket.",
      "Fasten the internal waist tie to set the drape.",
      "Reverse the sequence to fold the panel back into the side pockets.",
    ],
    fit: "Relaxed through the shoulder, straight through the body. Model is 5'9\" and wears a UK 10. Size down for a closer line.",
    care: "Cold machine wash on a delicate cycle. Unclasp all hardware first. Warm iron on the reverse. Do not tumble dry.",
  },
  {
    slug: "ashgrove-coat-dress",
    name: "Ashgrove Coat-to-Dress",
    price: 620,
    categories: ["Dresses", "Convertible"],
    tagline: "A belted wool coat that reconfigures into a sleeveless midi dress.",
    materials: "78% British lambswool, 22% recycled nylon; horn buttons",
    images: [p2a, p2b],
    states: ["Coat", "Midi dress"],
    description:
      "Cut from a felted lambswool woven in Yorkshire. The sleeves detach at a hidden armhole seam and the storm flap folds flat, leaving a sculpted sleeveless dress with the same architectural shoulder line.",
    transformation: [
      "Unbutton the sleeve head at the concealed armhole seam.",
      "Fold the storm flap inward and press the magnetic closure.",
      "Roll the belt into the interior loop to sit flat.",
      "Sleeves stow in the included cotton pouch.",
    ],
    fit: "True to size with room for a fine knit underneath. Midi length falls just below the knee.",
    care: "Dry clean only. Brush with a natural bristle brush between wears.",
  },
  {
    slug: "verre-silk-wrap",
    name: "Verre Silk Wrap",
    price: 445,
    categories: ["Shirts", "Convertible"],
    tagline: "A tie-front blouse that unfurls into a floor-length column.",
    materials: "100% mulberry silk crêpe de chine, 19mm",
    images: [p3a, p3b],
    states: ["Blouse", "Column dress"],
    description:
      "One continuous length of silk, engineered with three anchor points. Tied high it reads as a blouse; released and re-wrapped it becomes an evening column with a bias-cut skirt.",
    transformation: [
      "Untie the waist sash and hold the front panels together.",
      "Draw the lower panel down from its folded pocket.",
      "Cross the panels and re-tie at the natural waist.",
      "Adjust the shoulder anchors for length.",
    ],
    fit: "Fluid and forgiving. One size spans UK 8–14 through the wrap.",
    care: "Hand wash cool or dry clean. Cool iron on the reverse while slightly damp.",
  },
  {
    slug: "pell-knit-two-way",
    name: "Pell Two-Way Knit",
    price: 295,
    categories: ["Dresses", "Convertible"],
    tagline: "A ribbed merino dress that opens flat into a longline cardigan.",
    materials: "100% extra-fine merino wool, fully fashioned in Leicester",
    images: [p4a, p4b],
    states: ["Knit dress", "Longline cardigan"],
    description:
      "Knitted in one piece with a concealed front seam. Unpick nothing — simply release the seam placket and the dress opens into a longline cardigan with ribbed pockets.",
    transformation: [
      "Open the concealed placket from the hem upward.",
      "Fold the front edges back to form the lapel.",
      "Fasten the five horn buttons to wear closed.",
      "Re-seal the placket to return to the dress.",
    ],
    fit: "Close-fitting as a dress, easy as a cardigan. Sizes UK 6–18.",
    care: "Hand wash cool with wool detergent. Dry flat, reshape while damp.",
  },
  {
    slug: "hale-linen-shirt",
    name: "Hale Linen Shirt",
    price: 265,
    categories: ["Shirts", "Convertible"],
    tagline: "A washed linen shirt with fold-away sleeves and a drop hem.",
    materials: "100% Belgian washed linen, corozo buttons",
    images: [p5a, p5b],
    states: ["Shirt", "Sleeveless dress"],
    description:
      "Our lightest piece. The sleeves fold into the armhole facing and the hem panel unrolls, giving a clean sleeveless midi for warmer months.",
    transformation: [
      "Fold each sleeve inward along the pressed crease.",
      "Secure with the interior loop and button.",
      "Unroll the hem panel and smooth the side vents.",
      "Reverse to return to the shirt.",
    ],
    fit: "Boxy at the shoulder, gently tapered. Take your usual size.",
    care: "Machine wash cool. Line dry. Linen is meant to crease.",
  },
  {
    slug: "bramber-tailored",
    name: "Bramber Tailored Convertible",
    price: 690,
    categories: ["Dresses", "Convertible"],
    tagline: "A single-button jacket that becomes a knee-length tailored dress.",
    materials: "Super 120s British wool with Bemberg cupro lining",
    images: [p6a, p6b],
    states: ["Jacket", "Tailored dress"],
    description:
      "Traditional tailoring with a modern hinge. The peak lapel folds inward against a hidden jewel neckline, and the skirt panel drops from the internal waistband.",
    transformation: [
      "Fold the lapels inward to reveal the jewel neckline.",
      "Fasten the two neckline hooks.",
      "Release the skirt panel from the internal waistband.",
      "Press lightly along the fold line before wear.",
    ],
    fit: "Tailored close through the waist. We recommend a fitting appointment.",
    care: "Dry clean only. Store on a broad wooden hanger.",
  },
  {
    slug: "quill-pleat-tunic",
    name: "Quill Pleat Tunic",
    price: 340,
    categories: ["Shirts", "Dresses"],
    tagline: "A pleated tunic that lengthens into an A-line day dress.",
    materials: "Silk-cotton twill, 62% cotton / 38% silk",
    images: [p7a],
    states: ["Tunic", "Day dress"],
    description:
      "Knife pleats hold two lengths at once. Release the stitched pleat lock and the tunic falls to a full A-line dress with the same quiet shoulder.",
    transformation: [
      "Slide the pleat lock down each side seam.",
      "Shake gently to let the pleats settle.",
      "Fasten the neckline stud for a closer collar.",
      "Re-lock the pleats to shorten.",
    ],
    fit: "Easy through the body. Tunic sits at mid-thigh, dress just above the knee.",
    care: "Dry clean recommended to preserve the pleats.",
  },
  {
    slug: "loam-utility-dress",
    name: "Loam Utility Dress",
    price: 310,
    categories: ["Dresses", "Convertible"],
    tagline: "A workwear dress with a hem that folds up into a tunic length.",
    materials: "Organic cotton drill, garment dyed in Somerset",
    images: [p8a],
    states: ["Midi dress", "Tunic"],
    description:
      "Built for long days. The lower hem folds up and fastens into the waist seam, taking the dress from midi to tunic without altering the silhouette above the waist.",
    transformation: [
      "Fold the hem upward to the marked waist seam.",
      "Fasten the eight interior press studs.",
      "Smooth the resulting waist fold.",
      "Unfasten to return to midi length.",
    ],
    fit: "Relaxed. Deep pockets at the hip. Sizes UK 6–18.",
    care: "Machine wash warm. Tumble dry low. Gets better with wear.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const journal = [
  {
    slug: "one-coat-seven-days",
    title: "One Coat, Seven Days",
    date: "March 2026",
    excerpt:
      "Our editor takes a single Ashgrove through a week in London — from a wet Monday commute to a Friday dinner in Marylebone.",
    image: j1,
  },
  {
    slug: "the-clasp",
    title: "The Clasp That Took Two Years",
    date: "February 2026",
    excerpt:
      "Notes from the workshop on the small brass mechanism behind every Marlow, and the eleven prototypes that came before it.",
    image: j2,
  },
  {
    slug: "spring-lookbook",
    title: "Spring Lookbook: Bone, Champagne, Olive",
    date: "January 2026",
    excerpt:
      "Three colourways, six garments, twelve ways to wear them. A quiet study in fabric that earns its place twice over.",
    image: j3,
  },
];
