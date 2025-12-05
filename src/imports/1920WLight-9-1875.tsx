import svgPaths from "./svg-pe9a5oswy";
import imgAvatarIGk4X1NjsVgWzFvuQqadJp9IPng from "figma:asset/75e5c5a87db3982220f0406948993fec4781a44d.png";
import imgPhoto from "figma:asset/c746ff0897b5f608b46aa66d2862f0e89ef16046.png";
import imgPhotoQuomiScreen from "figma:asset/c2318931eb407caf67cded54bb71972c78f5b76f.png";
import imgPhotoAiveoScreen from "figma:asset/e6bdf6b5a2ad6225766452cc0fe97f4ad9b3d701.png";
import imgImage1 from "figma:asset/7172e040f6077a55145fdb81ad34063356ee9deb.png";
import imgFramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png1 from "figma:asset/1c5902789edc745397bdcb49a2bf759a4bc0124f.png";
import { imgImage, imgFramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png, imgBottom } from "./svg-mmeto";

function GradientBackground() {
  return <div className="absolute inset-0" data-name="Gradient Background" />;
}

function Variant() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Variant 1">
      <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 1200\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(135.76 0 0 84.853 960 600)\\'><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0.035355\\'/><stop stop-color=\\'rgba(38,38,38,0)\\' offset=\\'0.035355\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 1200\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(135.76 0 0 84.853 960 600)\\'><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0.035355\\'/><stop stop-color=\\'rgba(26,26,26,1)\\' offset=\\'0.035355\\'/></radialGradient></defs></svg>')" }} />
      <GradientBackground />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[1200px] left-0 top-0 w-[1920px]" data-name="Container">
      <Variant />
    </div>
  );
}

function AvatarIGk4X1NjsVgWzFvuQqadJp9IPng() {
  return (
    <div className="absolute inset-0 rounded-[60px]" data-name="Avatar → iGk4x1NJSVgWzFvuQQADJp9I.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[60px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatarIGk4X1NjsVgWzFvuQqadJp9IPng} />
      </div>
    </div>
  );
}

function Ammaar() {
  return (
    <div className="absolute bg-[#bffffd] h-[72px] left-0 overflow-clip right-[176.02px] rounded-[60px] top-0" data-name="Ammaar">
      <AvatarIGk4X1NjsVgWzFvuQqadJp9IPng />
    </div>
  );
}

function Name() {
  return (
    <div className="absolute bottom-0 font-['Azeret_Mono:Regular',sans-serif] font-normal leading-[0] left-[80px] top-0 w-[168.02px]" data-name="Name">
      <div className="absolute flex flex-col h-[37px] justify-center left-0 text-[32px] text-white top-[25.5px] tracking-[3.2px] translate-y-[-50%] w-[168.35px]">
        <p className="leading-[38.4px]">TONY B.</p>
      </div>
      <div className="absolute flex flex-col h-[16px] justify-center left-0 text-[#b3b3b3] text-[14px] top-[54.41px] translate-y-[-50%] w-[145.923px]">
        <p className="leading-[19.6px]">PRODUCT DESIGNER</p>
      </div>
    </div>
  );
}

function LeftStackLinkDesktop() {
  return (
    <div className="absolute h-[72px] left-0 top-[48px] w-[248.02px]" data-name="Left Stack → Link - Desktop">
      <Ammaar />
      <Name />
    </div>
  );
}

function Background() {
  return <div className="absolute bg-[#242424] left-0 opacity-0 rounded-[24px] size-[48px] top-0" data-name="Background" />;
}

function TwitterLinkVariant() {
  return (
    <div className="absolute bottom-0 left-0 overflow-clip right-[384px] rounded-[36px] top-0" data-name="Twitter → Link - Variant 1">
      <Background />
      <div className="absolute border border-solid border-white inset-0 rounded-[36px]" data-name="Border" />
    </div>
  );
}

function Background1() {
  return <div className="absolute bg-[#242424] left-0 opacity-0 rounded-[24px] size-[48px] top-0" data-name="Background" />;
}

function LinkedInLinkVariant() {
  return (
    <div className="absolute bottom-0 left-[60px] overflow-clip right-[324px] rounded-[36px] top-0" data-name="LinkedIn → Link - Variant 1">
      <Background1 />
      <div className="absolute border border-solid border-white inset-0 rounded-[36px]" data-name="Border" />
    </div>
  );
}

function Background2() {
  return <div className="absolute bg-[#242424] left-0 opacity-0 rounded-[24px] size-[48px] top-0" data-name="Background" />;
}

function YoutubeLinkVariant() {
  return (
    <div className="absolute bottom-0 left-[120px] overflow-clip right-[264px] rounded-[36px] top-0" data-name="Youtube → Link - Variant 1">
      <Background2 />
      <div className="absolute border border-solid border-white inset-0 rounded-[36px]" data-name="Border" />
    </div>
  );
}

function BottomStack() {
  return (
    <div className="absolute bottom-[152px] h-[48px] left-0 right-[24px]" data-name="Bottom Stack">
      <TwitterLinkVariant />
      <LinkedInLinkVariant />
      <YoutubeLinkVariant />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[19px] left-[55.22px] top-[-2px] w-[52.02px]" data-name="Link">
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] left-0 text-[#b3b3b3] text-[16px] top-[9.5px] translate-y-[-50%] w-[52.379px]">
        <p className="leading-[16px]">UIhub</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[19px] left-[152.05px] top-[-2px] w-[62.41px]" data-name="Link">
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] left-0 text-[#b3b3b3] text-[16px] top-[9.5px] translate-y-[-50%] w-[62.802px]">
        <p className="leading-[16px]">Framer</p>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[214.45px]" data-name="Copyright">
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[#b3b3b3] text-[16px] top-[8px] translate-y-[-50%] w-[10.728px]">
        <p className="leading-[16px]">©</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[22.41px] text-[#b3b3b3] text-[16px] top-[8px] translate-y-[-50%] w-[21.134px]">
        <p className="leading-[16px]">by</p>
      </div>
      <Link />
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[119.23px] text-[#b3b3b3] text-[16px] top-[8px] translate-y-[-50%] w-[21.134px]">
        <p className="leading-[16px]">in</p>
      </div>
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[19px] left-0 top-[-2px] w-[93.61px]" data-name="Link">
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] left-0 text-[#b3b3b3] text-[16px] top-[9.5px] translate-y-[-50%] w-[93.955px]">
        <p className="leading-[16px]">Licensing</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[19px] left-[117.61px] top-[-2px] w-[31.2px]" data-name="Link">
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] left-0 text-[#b3b3b3] text-[16px] top-[9.5px] translate-y-[-50%] w-[31.589px]">
        <p className="leading-[16px]">404</p>
      </div>
    </div>
  );
}

function Copyright1() {
  return (
    <div className="absolute h-[16px] left-0 top-[40px] w-[148.81px]" data-name="Copyright">
      <Link2 />
      <Link3 />
    </div>
  );
}

function FooterDefault() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip right-[147px] top-[1096px]" data-name="Footer - Default">
      <Copyright />
      <Copyright1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[1200px] pointer-events-auto sticky top-0" data-name="Container">
      <LeftStackLinkDesktop />
      <div className="absolute flex flex-col font-['Azeret_Mono:Light',sans-serif] font-light h-[191.83px] justify-center leading-[19.2px] left-0 text-[#b3b3b3] text-[16px] top-[263.92px] tracking-[1.6px] translate-y-[-50%] w-[336.23px]">
        <p className="mb-0">{`I specialize in crafting `}</p>
        <p className="mb-0">visually striking and user-</p>
        <p className="mb-0">{`friendly digital `}</p>
        <p className="mb-0">{`experiences. With a passion `}</p>
        <p className="mb-0">{`for blending aesthetics and `}</p>
        <p className="mb-0">{`functionality, I bring `}</p>
        <p className="mb-0">{`ideas to life, creating `}</p>
        <p className="mb-0">{`innovative solutions in the `}</p>
        <p className="mb-0">{`dynamic world of web `}</p>
        <p>design.</p>
      </div>
      <BottomStack />
      <FooterDefault />
    </div>
  );
}

function Background3() {
  return <div className="absolute bg-white right-[4px] rounded-[96px] size-[40px] top-[4px]" data-name="Background" />;
}

function LinkTransparentNewTab() {
  return (
    <div className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(255,255,255,0.1)] inset-[12px_478.8px_12px_12px] overflow-clip rounded-[24px]" data-name="Link - Transparent - new Tab">
      <div className="absolute flex flex-col font-['Azeret_Mono:Light',sans-serif] font-light h-[19.2px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[16px] text-center text-white top-[23.99px] tracking-[1.6px] translate-x-[-50%] translate-y-[-50%] w-[108.387px]">
        <p className="leading-[19.2px]">View Demo</p>
      </div>
      <Background3 />
    </div>
  );
}

function LinkDefaultNewTab() {
  return (
    <div className="absolute bg-[#214ade] inset-[12px_11.99px_12px_478.81px] overflow-clip rounded-[24px]" data-name="Link - Default - New Tab">
      <div className="absolute flex flex-col font-['Azeret_Mono:Light',sans-serif] font-light h-[19.2px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[16px] text-center text-white top-[23.99px] tracking-[1.6px] translate-x-[-50%] translate-y-[-50%] w-[144.332px]">
        <p className="leading-[19.2px]">Get Template</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#242424] h-[72px] left-0 overflow-clip right-0 rounded-[36px] top-[calc(50%-1389.26px)] translate-y-[-50%]" data-name="Background">
      <LinkTransparentNewTab />
      <LinkDefaultNewTab />
    </div>
  );
}

function Photo() {
  return (
    <div className="absolute aspect-[921.61/921.61] left-[12px] overflow-clip right-[12px] rounded-[24px] top-1/2 translate-y-[-50%]" data-name="Photo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPhoto} />
      </div>
    </div>
  );
}

function PhotoStack() {
  return (
    <div className="absolute bg-[#242424] h-[945.61px] left-0 overflow-clip right-0 rounded-[36px] top-[calc(50%-868.46px)] translate-y-[-50%]" data-name="Photo Stack">
      <Photo />
    </div>
  );
}

function Category() {
  return (
    <div className="absolute font-['Azeret_Mono:Light',sans-serif] font-light h-[14.41px] leading-[0] left-[24px] overflow-clip right-[24px] text-[12px] text-white top-[calc(50%-26.41px)] tracking-[1.2px] translate-y-[-50%]" data-name="Category">
      <div className="absolute flex flex-col h-[14px] justify-center left-0 top-[7px] translate-y-[-50%] w-[81.345px]">
        <p className="leading-[14.4px]">Category:</p>
      </div>
      <div className="absolute flex flex-col h-[14px] justify-center left-[87.02px] top-[7px] translate-y-[-50%] w-[90.359px]">
        <p className="leading-[14.4px]">Web Design</p>
      </div>
    </div>
  );
}

function Client() {
  return (
    <div className="absolute font-['Azeret_Mono:Light',sans-serif] font-light h-[14.41px] leading-[0] left-[24px] overflow-clip right-[24px] text-[12px] text-white top-1/2 tracking-[1.2px] translate-y-[-50%]" data-name="Client">
      <div className="absolute flex flex-col h-[14px] justify-center left-0 top-[7px] translate-y-[-50%] w-[63.414px]">
        <p className="leading-[14.4px]">Client:</p>
      </div>
      <div className="absolute flex flex-col h-[14px] justify-center left-[69.02px] top-[7px] translate-y-[-50%] w-[99.373px]">
        <p className="leading-[14.4px]">Rently Inc.</p>
      </div>
    </div>
  );
}

function Duration() {
  return (
    <div className="absolute font-['Azeret_Mono:Light',sans-serif] font-light h-[14.41px] leading-[0] left-[24px] overflow-clip right-[24px] text-[12px] text-white top-[calc(50%+26.4px)] tracking-[1.2px] translate-y-[-50%]" data-name="Duration">
      <div className="absolute flex flex-col h-[14px] justify-center left-0 top-[7px] translate-y-[-50%] w-[81.345px]">
        <p className="leading-[14.4px]">Duration:</p>
      </div>
      <div className="absolute flex flex-col h-[14px] justify-center left-[87.02px] top-[7px] translate-y-[-50%] w-[63.414px]">
        <p className="leading-[14.4px]">2 weeks</p>
      </div>
    </div>
  );
}

function Categories() {
  return (
    <div className="absolute bg-[#242424] h-[115.22px] left-0 overflow-clip right-0 rounded-[36px] top-[calc(50%-326.04px)] translate-y-[-50%]" data-name="Categories">
      <Category />
      <Client />
      <Duration />
    </div>
  );
}

function Strong() {
  return (
    <div className="absolute font-['Azeret_Mono:Bold',sans-serif] font-bold h-[35.59px] leading-[0] left-0 text-[#b3b3b3] text-[14px] top-px w-[864.53px]" data-name="Strong">
      <div className="absolute flex flex-col h-[16px] justify-center left-[782.61px] top-[8px] translate-y-[-50%] w-[82.246px]">
        <p className="leading-[19.6px]">{`property `}</p>
      </div>
      <div className="absolute flex flex-col h-[16px] justify-center left-0 top-[27.6px] translate-y-[-50%] w-[346.145px]">
        <p className="leading-[19.6px]">managers, boutique agencies, and hosts</p>
      </div>
    </div>
  );
}

function Strong1() {
  return (
    <div className="absolute font-['Azeret_Mono:Bold',sans-serif] font-bold h-[35.59px] leading-[0] left-0 text-[#b3b3b3] text-[14px] top-[681.68px] w-[864.53px]" data-name="Strong">
      <div className="absolute flex flex-col h-[16px] justify-center left-[709.81px] top-[8px] translate-y-[-50%] w-[155.04px]">
        <p className="leading-[19.6px]">{`Workshop-powered `}</p>
      </div>
      <div className="absolute flex flex-col h-[16px] justify-center left-0 top-[27.59px] translate-y-[-50%] w-[136.806px]">
        <p className="leading-[19.6px]">code components</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[254.72px] leading-[0] left-0 right-0 text-[#b3b3b3] text-[14px] top-[1131.8px]" data-name="List">
      <div className="absolute flex flex-col font-['Azeret_Mono:Bold',sans-serif] font-bold h-[35.6px] justify-center leading-[19.6px] left-[18.19px] top-[18.8px] translate-y-[-50%] w-[782.82px]">
        <p className="mb-0">
          Home<span className="font-['Azeret_Mono:Regular',sans-serif] font-normal">{` – A welcoming showcase that highlights featured properties and sets the tone for `}</span>
        </p>
        <p className="font-['Azeret_Mono:Regular',sans-serif] font-normal">exploration.</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Bold',sans-serif] font-bold h-[35.59px] justify-center leading-[19.6px] left-[18.19px] top-[57.98px] translate-y-[-50%] w-[782.82px]">
        <p className="mb-0">
          Location (CMS)<span className="font-['Azeret_Mono:Regular',sans-serif] font-normal">{` – Present different areas or neighborhoods dynamically with contextual `}</span>
        </p>
        <p className="font-['Azeret_Mono:Regular',sans-serif] font-normal">information.</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Bold',sans-serif] font-bold h-[16px] justify-center left-[18.19px] top-[87.38px] translate-y-[-50%] w-[728.494px]">
        <p className="leading-[19.6px]">
          Properties/Stays<span className="font-['Azeret_Mono:Regular',sans-serif] font-normal">{` – A structured overview of listings, curated for easy browsing.`}</span>
        </p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Bold',sans-serif] font-bold h-[35.59px] justify-center leading-[19.6px] left-[18.19px] top-[116.77px] translate-y-[-50%] w-[864.71px]">
        <p className="mb-0">
          Property/Stay (CMS)<span className="font-['Azeret_Mono:Regular',sans-serif] font-normal">{` – Individual pages that bring listings to life through visuals, amenities, `}</span>
        </p>
        <p className="font-['Azeret_Mono:Regular',sans-serif] font-normal">and storytelling.</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Bold',sans-serif] font-bold h-[16px] justify-center left-[18.19px] top-[146.16px] translate-y-[-50%] w-[710.287px]">
        <p className="leading-[19.6px]">
          About<span className="font-['Azeret_Mono:Regular',sans-serif] font-normal">{` – Introduce your mission, values, and team with authenticity and warmth.`}</span>
        </p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Bold',sans-serif] font-bold h-[16px] justify-center left-[18.19px] top-[165.75px] translate-y-[-50%] w-[774.012px]">
        <p className="leading-[19.6px]">
          Experiences<span className="font-['Azeret_Mono:Regular',sans-serif] font-normal">{` – Highlight curated activities, travel experiences, or lifestyle stories.`}</span>
        </p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Bold',sans-serif] font-bold h-[16px] justify-center left-[18.19px] top-[185.35px] translate-y-[-50%] w-[755.805px]">
        <p className="leading-[19.6px]">
          Experience (CMS)<span className="font-['Azeret_Mono:Regular',sans-serif] font-normal">{` – A detailed space for showcasing individual experiences in depth.`}</span>
        </p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Bold',sans-serif] font-bold h-[16px] justify-center left-[18.19px] top-[204.94px] translate-y-[-50%] w-[610.138px]">
        <p className="leading-[19.6px]">
          Contact<span className="font-['Azeret_Mono:Regular',sans-serif] font-normal">{` – Built-in forms for bookings, inquiries, or consultations.`}</span>
        </p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Bold',sans-serif] font-bold h-[16px] justify-center left-[18.19px] top-[224.53px] translate-y-[-50%] w-[710.287px]">
        <p className="leading-[19.6px]">
          Legal (CMS)<span className="font-['Azeret_Mono:Regular',sans-serif] font-normal">{` – Organized pages for policies, terms, and compliance information.`}</span>
        </p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Bold',sans-serif] font-bold h-[16px] justify-center left-[18.19px] top-[244.13px] translate-y-[-50%] w-[710.287px]">
        <p className="leading-[19.6px]">
          404<span className="font-['Azeret_Mono:Regular',sans-serif] font-normal">{` – A graceful error page maintaining the brand’s visual tone and user flow.`}</span>
        </p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[16px] justify-center left-0 top-[9px] translate-y-[-50%] w-[9.411px]">
        <p className="leading-[19.6px]">•</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[16px] justify-center left-0 top-[48.19px] translate-y-[-50%] w-[9.411px]">
        <p className="leading-[19.6px]">•</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[35.59px] justify-center leading-[19.6px] left-0 top-[97.17px] translate-y-[-50%] w-[9.31px]">
        <p className="mb-0">•</p>
        <p>•</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[113.99px] justify-center leading-[19.6px] left-0 top-[195.13px] translate-y-[-50%] w-[9.31px]">
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p>•</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[1549.69px] left-[24px] right-[24px] top-1/2 translate-y-[-50%]" data-name="Content">
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[#b3b3b3] text-[14px] top-[9px] translate-y-[-50%] w-[782.963px]">
        <p className="leading-[19.6px]">
          <span>{`Rently is a `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">premium real estate and hospitality template built in Framer</span>
          <span>{`, crafted for `}</span>
        </p>
      </div>
      <Strong />
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[345.81px] text-[#b3b3b3] text-[14px] top-[28.6px] translate-y-[-50%] w-[510.009px]">
        <p className="leading-[19.6px]">{` who want to showcase exceptional stays through design, `}</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[#b3b3b3] text-[14px] top-[48.19px] translate-y-[-50%] w-[364.342px]">
        <p className="leading-[19.6px]">storytelling, and seamless presentation.</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] left-0 text-[28px] text-white top-[94.79px] translate-y-[-50%] w-[200.556px]">
        <p className="leading-[33.6px]">My Approach</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[74.78px] justify-center leading-[19.6px] left-0 text-[#b3b3b3] text-[14px] top-[170.77px] translate-y-[-50%] w-[901.11px]">
        <p className="mb-0">{`Rently was created with a clear purpose — to transform how real estate is experienced online. My `}</p>
        <p className="mb-0">{`approach blends visual storytelling, precision layout systems, and human-centered design `}</p>
        <p className="mb-0">{`principles to create a platform that feels as sophisticated as the properties it showcases. Rently `}</p>
        <p>doesn’t just list spaces — it evokes a sense of place, helping users imagine life within them.</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[25.2px] justify-center leading-[0] left-0 text-[18px] text-white top-[243.35px] translate-y-[-50%] w-[246.091px]">
        <p className="leading-[25.2px]">Vision and Innovation</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[113.97px] justify-center leading-[19.6px] left-0 text-[#b3b3b3] text-[14px] top-[333.94px] translate-y-[-50%] w-[892px]">
        <p className="mb-0">{`The vision behind Rently is to elevate digital property browsing into an emotional experience. `}</p>
        <p className="mb-0">{`Built for creators, agencies, and real estate curators, it merges aesthetics and function through `}</p>
        <p className="mb-0">
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">light and dark themes</span>
          <span>{`, dynamic `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">slideshows and tickers</span>
          <span>{`, and `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">CMS-driven content</span>
          <span>{` that adapts `}</span>
        </p>
        <p className="mb-0">{`effortlessly. Each layout and animation has been refined to strike a balance between editorial `}</p>
        <p className="mb-0">{`design and real estate practicality — blending immersive storytelling with conversion-focused `}</p>
        <p>performance.</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[25.2px] justify-center leading-[0] left-0 text-[18px] text-white top-[426.12px] translate-y-[-50%] w-[339.642px]">
        <p className="leading-[25.2px]">Identifying Unique Challenges</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[94.38px] justify-center leading-[19.6px] left-0 text-[#b3b3b3] text-[14px] top-[506.91px] translate-y-[-50%] w-[855.61px]">
        <p className="mb-0">{`In real estate, the biggest challenge is emotional connection — turning square footage into `}</p>
        <p className="mb-0">{`desire. Static listings often fail to capture the warmth and atmosphere of a property. Rently `}</p>
        <p className="mb-0">{`addresses this by combining immersive visuals with engaging scroll-based storytelling. From `}</p>
        <p className="mb-0">
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">Property/Stay pages (CMS)</span>
          <span>{` to `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">Experiences</span>
          <span>{`, every section is designed to highlight the unique `}</span>
        </p>
        <p>narrative of each space — not just its specifications.</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[25.2px] justify-center leading-[0] left-0 text-[18px] text-white top-[589.29px] translate-y-[-50%] w-[304.518px]">
        <p className="leading-[25.2px]">Resolving Complex Problems</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[74.78px] justify-center leading-[0] left-0 text-[#b3b3b3] text-[14px] top-[660.29px] translate-y-[-50%] w-[901.12px]">
        <p className="leading-[19.6px] mb-0">
          <span>{`Rently simplifies the complexities of real estate presentation through modular `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">CMS collections</span>
          <span>{` for `}</span>
        </p>
        <p className="leading-[19.6px] mb-0">{`properties, locations, and experiences. Whether managing a single portfolio or an entire agency `}</p>
        <p className="leading-[19.6px] mb-0">
          <span>{`catalog, updating content is effortless. `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">Sticky scrolling</span>
          <span>{` and thoughtfully built `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">layout templates</span>{" "}
        </p>
        <p className="leading-[19.6px]">
          <span>{`enhance navigation, while `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">forms</span>
          <span>{` streamline inquiries and bookings. Meanwhile, `}</span>
        </p>
      </div>
      <Strong1 />
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[136.5px] text-[#b3b3b3] text-[14px] top-[709.27px] translate-y-[-50%] w-[428.067px]">
        <p className="leading-[19.6px]">{` ensure scalability for advanced customization.`}</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[25.2px] justify-center leading-[0] left-0 text-[18px] text-white top-[752.46px] translate-y-[-50%] w-[222.683px]">
        <p className="leading-[25.2px]">User-Centric Design</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[94.37px] justify-center leading-[19.6px] left-0 text-[#b3b3b3] text-[14px] top-[833.26px] translate-y-[-50%] w-[901.14px]">
        <p className="mb-0">{`Every interaction in Rently is guided by empathy and usability. From exploring locations to `}</p>
        <p className="mb-0">{`viewing property galleries, users experience seamless transitions and consistent design language `}</p>
        <p className="mb-0">
          <span>{`across all pages. `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">Light and dark themes</span>
          <span>{` adapt to viewing preferences, while smooth scrolling and a `}</span>
        </p>
        <p className="mb-0">{`minimalist interface keep the focus on imagery and information. The experience feels calm, `}</p>
        <p>intuitive, and immersive — exactly how property exploration should be.</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[25.2px] justify-center leading-[0] left-0 text-[18px] text-white top-[915.64px] translate-y-[-50%] w-[210.974px]">
        <p className="leading-[25.2px]">Meeting User Needs</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[94.37px] justify-center leading-[19.6px] left-0 text-[#b3b3b3] text-[14px] top-[996.42px] translate-y-[-50%] w-[873.81px]">
        <p className="mb-0">{`Rently was designed with all audiences in mind — from buyers seeking new homes to travelers `}</p>
        <p className="mb-0">
          <span>{`looking for stays or agencies curating portfolios. It offers detailed `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">Property/Stay pages</span>
          <span>{`, rich `}</span>
        </p>
        <p className="mb-0">
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">Experience showcases</span>
          <span>{`, and a dedicated `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">Contact page</span>
          <span>{` for direct communication. `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">Legal CMS pages</span>{" "}
        </p>
        <p className="mb-0">
          <span>{`ensure transparency and compliance, while the `}</span>
          <span className="font-['Azeret_Mono:Bold',sans-serif] font-bold">404 page</span>
          <span>{` keeps users gently guided back into the `}</span>
        </p>
        <p>experience.</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] left-0 text-[28px] text-white top-[1082.21px] translate-y-[-50%] w-[491.802px]">
        <p className="leading-[33.6px]">Detailed Pages and Features</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[25.2px] justify-center leading-[0] left-0 text-[18px] text-white top-[1419.12px] translate-y-[-50%] w-[117.381px]">
        <p className="leading-[25.2px]">Conclusion</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[94.38px] justify-center leading-[19.6px] left-0 text-[#b3b3b3] text-[14px] top-[1499.91px] translate-y-[-50%] w-[901.11px]">
        <p className="mb-0">{`Rently isn’t just a real estate template — it’s a digital framework for storytelling through `}</p>
        <p className="mb-0">{`space. Designed for professionals who value emotion, detail, and timeless design, Rently `}</p>
        <p className="mb-0">{`transforms property browsing into an experience of discovery and connection. With its combination `}</p>
        <p className="mb-0">{`of modern aesthetics, CMS flexibility, and intuitive navigation, it empowers creators and agencies `}</p>
        <p>to present spaces not as listings — but as living, breathing environments waiting to be explored.</p>
      </div>
      <List />
    </div>
  );
}

function ArticleContent() {
  return (
    <div className="absolute bg-[#242424] h-[1597.69px] left-0 overflow-clip right-0 rounded-[36px] top-[calc(50%+542.4px)] translate-y-[-50%]" data-name="Article - Content">
      <Content />
    </div>
  );
}

function Background5() {
  return <div className="absolute bg-white right-[4px] rounded-[96px] size-[40px] top-[4px]" data-name="Background" />;
}

function LinkTransparentNewTab1() {
  return (
    <div className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(255,255,255,0.1)] inset-[12px_478.8px_12px_12px] overflow-clip rounded-[24px]" data-name="Link - Transparent - new Tab">
      <div className="absolute flex flex-col font-['Azeret_Mono:Light',sans-serif] font-light h-[19.2px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[16px] text-center text-white top-[23.99px] tracking-[1.6px] translate-x-[-50%] translate-y-[-50%] w-[108.387px]">
        <p className="leading-[19.2px]">View Demo</p>
      </div>
      <Background5 />
    </div>
  );
}

function LinkDefaultNewTab1() {
  return (
    <div className="absolute bg-[#214ade] inset-[12px_11.99px_12px_478.81px] overflow-clip rounded-[24px]" data-name="Link - Default - New Tab">
      <div className="absolute flex flex-col font-['Azeret_Mono:Light',sans-serif] font-light h-[19.2px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[16px] text-center text-white top-[23.99px] tracking-[1.6px] translate-x-[-50%] translate-y-[-50%] w-[144.332px]">
        <p className="leading-[19.2px]">Get Template</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#242424] h-[72px] left-0 overflow-clip right-0 rounded-[36px] top-[calc(50%+1389.25px)] translate-y-[-50%]" data-name="Background">
      <LinkTransparentNewTab1 />
      <LinkDefaultNewTab1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[2850.52px] left-0 overflow-clip right-[422.39px] top-[266.41px]" data-name="Container">
      <Background4 />
      <PhotoStack />
      <Categories />
      <ArticleContent />
      <Background6 />
    </div>
  );
}

function OtherProjects() {
  return (
    <div className="absolute h-[72px] left-0 overflow-clip right-0 top-[calc(50%-405.32px)] translate-y-[-50%]" data-name="Other Projects">
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[25.2px] justify-center leading-[0] left-[12px] text-[18px] text-white top-[59.39px] translate-y-[-50%] w-[164.137px]">
        <p className="leading-[25.2px]">Other Projects</p>
      </div>
    </div>
  );
}

function Background7() {
  return <div className="absolute bg-white right-[4px] rounded-[96px] size-[40px] top-[4px]" data-name="Background" />;
}

function LinkTransparent() {
  return (
    <div className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(255,255,255,0.1)] inset-[12px] overflow-clip rounded-[24px]" data-name="Link - Transparent">
      <div className="absolute flex flex-col font-['Azeret_Mono:Light',sans-serif] font-light h-[19.2px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[16px] text-center text-white top-[23.99px] tracking-[1.6px] translate-x-[-50%] translate-y-[-50%] w-[96.368px]">
        <p className="leading-[19.2px]">View All</p>
      </div>
      <Background7 />
    </div>
  );
}

function AllProjects() {
  return (
    <div className="absolute bg-[#242424] h-[72px] left-0 overflow-clip right-0 rounded-[36px] top-[calc(50%+405.3px)] translate-y-[-50%]" data-name="All projects">
      <LinkTransparent />
    </div>
  );
}

function Post() {
  return (
    <div className="absolute h-[95.22px] leading-[0] left-[12px] right-[12px] top-[244.09px]" data-name="Post">
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[46.2px] justify-center leading-[25.2px] left-[12px] text-[18px] text-white top-[25.1px] translate-y-[-50%] w-[304.4px]">
        <p className="mb-0">{`Quomi - Designer Personal `}</p>
        <p>Portfolio</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Light',sans-serif] font-light h-[14px] justify-center left-[12px] text-[#b3b3b3] text-[12px] top-[65.41px] tracking-[1.2px] translate-y-[-50%] w-[108.387px]">
        <p className="leading-[14.4px]">Nov 21, 2024</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Light',sans-serif] font-light h-[14px] justify-center left-[12px] text-[#b3b3b3] text-[12px] top-[87.81px] tracking-[1.2px] translate-y-[-50%] w-[90.359px]">
        <p className="leading-[14.4px]">Web Design</p>
      </div>
    </div>
  );
}

function PhotoQuomiScreen() {
  return (
    <div className="absolute bottom-[-166.3px] left-0 right-0 top-0" data-name="Photo → Quomi Screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPhotoQuomiScreen} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute aspect-[386.39/220.09] left-[12px] overflow-clip right-[12px] rounded-[24px] top-[12px]" data-name="Container">
      <PhotoQuomiScreen />
    </div>
  );
}

function Background8() {
  return <div className="absolute bg-white left-1/2 rounded-[96px] size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Background" />;
}

function ArrowSimple() {
  return (
    <div className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(255,255,255,0.1)] inset-[291.31px_12px_12px_350.39px] overflow-clip rounded-[24px]" data-name="Arrow Simple">
      <Background8 />
    </div>
  );
}

function LinkPortrait() {
  return (
    <div className="absolute bg-[#242424] h-[351.31px] left-0 rounded-[36px] top-[84px] w-[410.39px]" data-name="Link - Portrait">
      <Post />
      <Container3 />
      <ArrowSimple />
    </div>
  );
}

function Post1() {
  return (
    <div className="absolute h-[95.22px] leading-[0] left-[12px] right-[12px] top-[244.09px]" data-name="Post">
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[46.21px] justify-center leading-[25.2px] left-[12px] text-[18px] text-white top-[25.1px] translate-y-[-50%] w-[327.81px]">
        <p className="mb-0">{`Aiveo - Website for AI SAAS `}</p>
        <p>Startup</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Light',sans-serif] font-light h-[14px] justify-center left-[12px] text-[#b3b3b3] text-[12px] top-[65.41px] tracking-[1.2px] translate-y-[-50%] w-[108.387px]">
        <p className="leading-[14.4px]">Nov 21, 2024</p>
      </div>
      <div className="absolute flex flex-col font-['Azeret_Mono:Light',sans-serif] font-light h-[14px] justify-center left-[12px] text-[#b3b3b3] text-[12px] top-[87.82px] tracking-[1.2px] translate-y-[-50%] w-[90.359px]">
        <p className="leading-[14.4px]">Web Design</p>
      </div>
    </div>
  );
}

function PhotoAiveoScreen() {
  return (
    <div className="absolute bottom-[-166.3px] left-0 right-0 top-0" data-name="Photo → Aiveo Screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPhotoAiveoScreen} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute aspect-[386.39/220.09] left-[12px] overflow-clip right-[12px] rounded-[24px] top-[12px]" data-name="Container">
      <PhotoAiveoScreen />
    </div>
  );
}

function Background9() {
  return <div className="absolute bg-white left-1/2 rounded-[96px] size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Background" />;
}

function ArrowSimple1() {
  return (
    <div className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(255,255,255,0.1)] inset-[291.31px_12px_12px_350.39px] overflow-clip rounded-[24px]" data-name="Arrow Simple">
      <Background9 />
    </div>
  );
}

function LinkPortrait1() {
  return (
    <div className="absolute bg-[#242424] h-[351.31px] left-0 rounded-[36px] top-[447.31px] w-[410.39px]" data-name="Link - Portrait">
      <Post1 />
      <Container4 />
      <ArrowSimple1 />
    </div>
  );
}

function OtherProjectsStack() {
  return (
    <div className="h-[882.63px] pointer-events-auto sticky top-0" data-name="Other Projects Stack">
      <OtherProjects />
      <AllProjects />
      <LinkPortrait />
      <LinkPortrait1 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[798.69px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_801.68px] right-0 top-0" data-name="image" style={{ maskImage: `url('${imgImage}')` }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage1} />
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute h-[801.68px] left-[73.45px] right-[73.47px] top-[calc(50%+116.5px)] translate-y-[-50%]" data-name="Mask Group">
      <Image />
    </div>
  );
}

function Background10() {
  return <div className="absolute bg-white left-1/2 rounded-[96px] size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Background" />;
}

function ArrowSimple2() {
  return (
    <div className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(255,255,255,0.1)] inset-[240px_12px_12px_885.61px] overflow-clip rounded-[24px]" data-name="Arrow Simple">
      <Background10 />
    </div>
  );
}

function LinkDefault() {
  return (
    <div className="absolute bg-[#f7a307] h-[300px] left-0 overflow-clip right-[422.39px] rounded-[36px] top-0" data-name="Link - Default">
      <MaskGroup />
      <ArrowSimple2 />
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[25.2px] justify-center leading-[0] left-[24px] text-[18px] text-white top-[36.6px] translate-y-[-50%] w-[82.236px]">
        <p className="leading-[25.2px]">Contact</p>
      </div>
    </div>
  );
}

function FramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png() {
  return (
    <div className="absolute bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_246.33px] right-[0.01px] rounded-tl-[24px] rounded-tr-[24px] top-0" data-name="Framer_screen → c7HJIv5NZBALKnGeCxH7AHzeE0.png" style={{ maskImage: `url('${imgFramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png}')` }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[24px] rounded-tr-[24px]">
        <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-full" src={imgFramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png1} />
      </div>
    </div>
  );
}

function FramerScreenMaskGroup() {
  return (
    <div className="absolute h-[246.33px] left-[12.32px] right-[12.31px] top-[12.2px]" data-name="Framer_screen:mask-group">
      <FramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png />
    </div>
  );
}

function Background11() {
  return <div className="absolute bg-white left-1/2 rounded-[96px] size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Background" />;
}

function ArrowSimple3() {
  return (
    <div className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(255,255,255,0.1)] inset-[240px_12px_12px_350.39px] overflow-clip rounded-[24px]" data-name="Arrow Simple">
      <Background11 />
    </div>
  );
}

function LinkMobile() {
  return (
    <div className="absolute bg-[#242424] h-[300px] left-[957.61px] overflow-clip right-0 rounded-[36px] top-0" data-name="Link - Mobile">
      <FramerScreenMaskGroup />
      <ArrowSimple3 />
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[65.59px] justify-center leading-[33.6px] left-[calc(50%+0.1px)] text-[28px] text-center text-white top-[149.21px] translate-x-[-50%] translate-y-[-50%] w-[109.41px]">
        <p className="mb-0">Master</p>
        <p>Framer</p>
      </div>
    </div>
  );
}

function ContentBottomBentos() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip right-0 top-[calc(50%+1540.46px)] translate-y-[-50%]" data-name="Content → Bottom bentos">
      <LinkDefault />
      <LinkMobile />
    </div>
  );
}

function TimeAndDate() {
  return (
    <div className="absolute font-['Azeret_Mono:Regular',sans-serif] font-normal h-[16px] leading-[0] left-[12px] overflow-clip text-[16px] text-white top-1/2 translate-y-[-50%] w-[178.42px]" data-name="Time and Date">
      <div className="absolute flex flex-col h-[16px] justify-center left-0 top-[8px] translate-y-[-50%] w-[52.379px]">
        <p className="leading-[16px]">15:20</p>
      </div>
      <div className="absolute flex flex-col h-[16px] justify-center left-[64.02px] top-[8px] translate-y-[-50%] w-[114.787px]">
        <p className="leading-[16px]">Dec 4, 2025</p>
      </div>
    </div>
  );
}

function HamburgerMenu() {
  return <div className="absolute bg-white h-px left-0 right-0 rounded-[2px] top-[8px]" data-name="Hamburger Menu" />;
}

function HamburgerMenu1() {
  return <div className="absolute bg-white bottom-[8px] h-px left-0 right-0 rounded-[2px]" data-name="Hamburger Menu" />;
}

function Menu() {
  return (
    <div className="absolute left-[11.5px] overflow-clip size-[25px] top-[11.5px]" data-name="Menu">
      <HamburgerMenu />
      <HamburgerMenu1 />
    </div>
  );
}

function NavDefaultDesktop() {
  return (
    <div className="absolute backdrop-blur-[2.5px] backdrop-filter inset-[12px_12px_12px_1308px] rounded-[24px]" data-name="Nav - Default - Desktop">
      <div className="absolute border border-solid border-white inset-0 rounded-[24px]" data-name="Border" />
      <Menu />
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute bg-[#121212] h-[72px] left-0 right-0 rounded-[48px] top-[calc(50%-1654.46px)] translate-y-[-50%]" data-name="Desktop">
      <TimeAndDate />
      <NavDefaultDesktop />
    </div>
  );
}

function ContentStack() {
  return (
    <div className="absolute h-[3476.92px] left-[456px] right-0 top-0" data-name="Content Stack">
      <div className="absolute flex flex-col font-['Azeret_Mono:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] left-0 text-[32px] text-white top-[186.5px] translate-y-[-50%] w-[582.837px]">
        <p className="leading-[38.4px]">Rently - Real Estate Website</p>
      </div>
      <Container2 />
      <div className="absolute bottom-0 h-[3210.51px] left-[70%] pointer-events-none right-0 top-[266.41px]">
        <OtherProjectsStack />
      </div>
      <ContentBottomBentos />
      <Desktop />
    </div>
  );
}

function MainContentSectionMainStack() {
  return (
    <div className="absolute h-[3476.92px] left-[48px] right-[48px] top-1/2 translate-y-[-50%]" data-name="Main - Content → Section - Main Stack">
      <div className="absolute bottom-0 h-[3476.92px] left-0 pointer-events-none right-3/4 top-0">
        <Container1 />
      </div>
      <ContentStack />
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-black h-[3476.92px] left-0 right-0 top-0" data-name="Background">
      <Container />
      <MainContentSectionMainStack />
    </div>
  );
}

function LinkGetTemplate() {
  return (
    <div className="absolute bg-[#214ade] inset-0 overflow-clip rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" data-name="Link - Get Template">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[10.48px] not-italic text-[11.1px] text-white top-[17.3px] tracking-[1.2px] translate-y-[-50%] w-[121.23px]">
        <p className="leading-[14.4px]">Get FREE Template</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[2340.92px] h-[36px] left-[1758px] w-[142px]" data-name="Container">
      <LinkGetTemplate />
    </div>
  );
}

function Backdrop() {
  return <div className="absolute bg-white inset-px rounded-[10px] shadow-[0px_0.602px_1.566px_-1.5px_rgba(0,0,0,0.17),0px_2.289px_5.95px_-3px_rgba(0,0,0,0.14),0px_10px_26px_-4.5px_rgba(0,0,0,0.02)]" data-name="Backdrop" />;
}

function Image1() {
  return (
    <div className="absolute h-[20px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[12px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 20">
        <g id="image">
          <path d={svgPaths.p5ca1b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip top-0 w-[12px]" data-name="image fill">
      <Image1 />
    </div>
  );
}

function LogoMask() {
  return (
    <div className="absolute h-[20px] left-1/2 top-0 translate-x-[-50%] w-[12px]" data-name="Logo:mask">
      <ImageFill />
    </div>
  );
}

function LogoMaskGroup() {
  return (
    <div className="absolute h-[20px] left-[calc(50%-53.5px)] top-[-2px] translate-x-[-50%] w-[12px]" data-name="Logo:mask-group">
      <LogoMask />
      <div className="absolute bg-black h-[20px] left-1/2 top-0 translate-x-[-50%] w-[12px]" data-name="Logo" />
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[10px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[97px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 10">
        <g clipPath="url(#clip0_3_186)" id="image">
          <path d={svgPaths.p29f9900} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_186">
            <rect fill="white" height="10" width="97" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="absolute h-[10px] left-0 overflow-clip top-0 w-[97px]" data-name="image fill">
      <Image2 />
    </div>
  );
}

function TextMask() {
  return (
    <div className="absolute h-[10px] left-0 top-1/2 translate-y-[-50%] w-[97px]" data-name="Text:mask">
      <ImageFill1 />
    </div>
  );
}

function TextMaskGroup() {
  return (
    <div className="absolute h-[10px] left-[22px] top-1/2 translate-y-[-50%] w-[97px]" data-name="Text:mask-group">
      <TextMask />
      <div className="absolute bg-black h-[10px] left-0 top-1/2 translate-y-[-50%] w-[97px]" data-name="Text" />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute inset-[28.95%_7.5%]" data-name="Content">
      <LogoMaskGroup />
      <TextMaskGroup />
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%] opacity-[0.06] rounded-[11px]" data-name="Bottom" style={{ maskImage: `url('${imgBottom}')` }}>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_#000000]" />
    </div>
  );
}

function Border() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] inset-0 opacity-[0.04] rounded-[11px]" data-name="Border">
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_#000000]" />
    </div>
  );
}

function LinkLight() {
  return (
    <div className="absolute h-[38px] right-[20px] top-[20px] w-[140px]" data-name="Link - Light">
      <Backdrop />
      <Content1 />
      <Bottom />
      <Border />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-[2276.92px] h-[78px] left-0 w-[1920px]" data-name="Container">
      <LinkLight />
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="relative size-full" data-name="1920w light" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container5 />
      <Container6 />
      <Background12 />
    </div>
  );
}