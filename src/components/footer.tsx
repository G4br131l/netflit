type content = {
  content: string;
  ref: string
}

interface Section {
  name: string
  contents: content[];
};

export function Footer() {
  const sections: Section[] = [
    {
      name:'Home',
      contents: [{
          content: 'Categories',
          ref: "https"
        },{
          content: 'Devices',
          ref: 'https'
        },{
          content: 'Pricing',
          ref: 'https'
        },{
          content: 'FAQ',
          ref: 'https'
      }]},
    {
      name:'Movies',
      contents: [{
          content: 'Gernes',
          ref: "https"
        },{
          content: 'Trending',
          ref: 'https'
        },{
          content: 'New Release',
          ref: 'https'
        },{
          content: 'Popular',
          ref: 'https'
      }]},
    {
      name:'Shows',
      contents: [{
          content: 'Gernes',
          ref: "https"
        },{
          content: 'Trending',
          ref: 'https'
        },{
          content: 'New Release',
          ref: 'https'
        },{
          content: 'Popular',
          ref: 'https'
      }]},
    {
      name:'Support',
      contents: [{
        content: 'Contact Us',
        ref: "https"
      }]},
    {
      name:'Subscription',
      contents: [{
          content: 'Plans',
          ref: "https"
        },{
          content: 'Features',
          ref: 'https'
      }],
    }
  ]

  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center flex-col w-full bg-[#0F0F0F]">
      <div className=" flex flex-row justify-between w-full">
        {
          sections.map(({name, contents}) => {
            return (
              <div>
                <h3 className=" text-[#FFFFFF]">{name}</h3>
                <div className=" flex flex-col text-[#999999]">
                  {contents.map(({ref, content}) => (<a href={ref}>{content}</a>))}
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="flex w-full gap-3 text-[#999999]">
        <span className=" grow">@2023 streamvib, All Rights Reserved</span>
        <a href="">Terms of Use</a>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
      </div>
    </footer>
  )
}