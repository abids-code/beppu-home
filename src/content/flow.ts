import type { Locale } from '../lib/i18n';
import { pick } from '../lib/i18n';
import type { Service } from './services';
import hero from '../assets/photos/13_1_9.jpg';

// Steps and questions from the published /buy/flow.html page (Japanese source).
// English is a translation; the Japanese text is the reference.

export const flowService: Record<Locale, Service> = {
  ja: {
    eyebrow: '不動産売却の流れ・Q&A',
    h1: '買取までの流れと、よくあるご質問。',
    lede: '保有の不動産が現金化されるまでの主な流れと、これまでにお客様からいただいたご質問への回答をまとめました。',
    hero,
    heroAlt: '別府市内の住戸の室内',
    sections: [
      { heading: 'STEP 1　お問い合わせ', paragraphs: ['まずはお気軽にお電話（0977-75-8528）、もしくは査定依頼／お問い合わせフォームからご連絡ください。売主様からのお話をしっかりとお伺いいたします。'] },
      { heading: 'STEP 2　査定報告・金額提示', paragraphs: ['売却予定の不動産を現地で直接確認し、査定をいたします。その後、最短2営業日以内に金額を提示いたします。県外や遠方にお住まいの場合、現地や当社まで来ていただく必要はありません。お手続きは当社がすべて承ります。'] },
      { heading: 'STEP 3　お打ち合わせ', paragraphs: ['査定額から買取価格のご提示を行い、今後のスケジュールについて打ち合わせをします。県外や遠方にお住まいの場合は、お電話・メール・郵送などで打ち合わせいたします。'] },
      { heading: 'STEP 4　ご契約', paragraphs: ['買取を依頼する不動産会社がある程度決まったら、どのような条件で買取するかを打ち合わせます。スケジュールや家財道具の処分などを、後からトラブルにならないよう文書にまとめていきます。'] },
      { heading: 'STEP 5　残金決済', paragraphs: ['ご契約の完了後、代金のお支払い手続きをいたします。お客様のご都合やご要望に合わせた対応が可能です。'] },
    ],
  },
  en: {
    eyebrow: 'Selling process and FAQ',
    h1: 'From first contact to purchase, and common questions',
    lede: 'The main steps from first contact until a property is turned into cash, with answers to questions our clients have asked.',
    hero,
    heroAlt: 'Interior of a home in Beppu',
    sections: [
      { heading: 'STEP 1　First contact', paragraphs: ['Please contact us by telephone (0977-75-8528) or through the valuation request and enquiry form. We listen carefully to what you tell us.'] },
      { heading: 'STEP 2　Valuation and price proposal', paragraphs: ['We visit the property to value it. We then propose a price within two business days at the earliest. If you live outside the prefecture or far away, you do not need to come to the property or to our office. We handle all the procedures.'] },
      { heading: 'STEP 3　Meeting', paragraphs: ['We propose a purchase price based on the valuation and discuss the schedule. If you live outside the prefecture or far away, we can do this by telephone, email or post.'] },
      { heading: 'STEP 4　Contract', paragraphs: ['Once you have chosen the property company you want to buy from, we discuss the terms of the purchase. The schedule, and whether belongings are removed, are written down so that there is no later misunderstanding.'] },
      { heading: 'STEP 5　Final settlement', paragraphs: ['After the contract is complete, we handle the payment. We can adapt to your timing and requirements.'] },
    ],
  },
};

export const flowFaq: Record<Locale, { q: string; a: string }[]> = {
  ja: [
    { q: '仲介売却と買取の違いは何ですか？', a: '「仲介売却」は、不動産会社へ売却を依頼して買主を見つける方法です。買主がなかなか見つからない場合や、売却完了まで日数が必要になるのが一般的です。「買取」は不動産会社が直接物件を買い取るため、即現金化が可能です。広告を出して買主を探さないため、プライバシーを重視した売却を希望される方にも選ばれています。詳しくは<a href="/buy/">不動産を売りたい方へ</a>をご覧ください。' },
    { q: '任意売却と買取は、どう違うのですか？', a: '「任意売却」は、住宅ローンを数ヶ月間滞納した場合に行う売却方法です。手間がかかる上に必ず売れるという保証もなく、催促通知が続いたり、連帯保証人への協力を求められたりするなど、不安が続くこともあります。「買取」は、必ず、すぐに売ることができる方法です。ただし、一般的に売却価格は買取の方が低くなることが多いでしょう。詳しくは<a href="/any/">ローンの返済ができない方へ</a>をご覧ください。' },
    { q: '他の不動産会社で売却中ですが、査定をお願いできますか？', a: '「一般媒介」もしくは「専任媒介」でご契約されている場合は対応可能です。査定を行い、買取価格をご提示します。また、現在の状況をお伺いしながら、今後のアドバイスもさせていただけます。' },
    { q: '建物が傷んでいると、買い取ってもらえませんか？', a: '原則として買い取らせていただきますが、買取の対象にならない場合もあります。あまりに古く修復が不可能な場合は、土地としての評価になります。' },
    { q: 'どんな不動産でも買取は可能ですか？', a: '戸建て・マンション・土地などの一般的な不動産のほか、空き家、老朽化したアパート、空き地、借地、貸地なども買取可能です。市街化調整区域や田んぼ、畑、山などは買取が難しい場合もございますので、まずはご相談ください。' },
    { q: '離婚し、早急に物件を売りたいです。可能ですか？', a: '仲介売却とは異なり、当社が直接売主様と取引するため、早急な対応が可能です。近隣住民の方に知られることなく売却することもできます。売却スケジュールなど、売主様のご要望にできる限り対応いたしますので、お気軽にお問い合わせください。' },
    { q: '親から相続した不動産を、どうしたらいいかわからず困っています。相談できますか？', a: '不動産取引には複雑な法律などが絡むため、何をすべきかお困りの方も多くいらっしゃいます。当社では難しい手続きも全て承るため、売主様が特別に動くことなく売却が可能です。まずはお話をお聞かせください。ご不明な点は丁寧にご説明いたします。' },
    { q: '空き家を持っており、そのままにしています。売却できますか？', a: '当社では全て自社で完結して処理しているため、ゴミがそのまま放置されている空き家であっても買取を行うことが可能です。他社で断られてしまった不動産物件も、まずはご相談ください。' },
    { q: '県外の実家を相続しました。売却できますか？', a: '物件が遠方や県外であっても、売主様は何もせず対応が可能です。取引のために現地や当社までご足労いただく必要はありません。柔軟に対応いたしますので、お気軽にお問い合わせください。' },
  ],
  en: [
    { q: 'What is the difference between a brokered sale and a purchase?', a: 'In a brokered sale, you instruct a property company to look for a buyer. It often takes time to find a buyer and to complete the sale. In a purchase, the property company buys the property directly, so cash can be received quickly. Because no advertising is needed to find a buyer, it suits clients who want privacy. For more, see <a href="/en/buy/">Selling your property</a>.' },
    { q: 'How is a voluntary sale different from a purchase?', a: 'A voluntary sale is a way of selling when a housing loan has been behind for several months. It takes effort, there is no guarantee of a sale, and reminders and requests to a guarantor can continue to cause worry. A purchase is a sale that is agreed and can be completed quickly. Usually, however, the price in a purchase is lower than in a brokered sale. For more, see <a href="/en/any/">Loan repayment difficulties</a>.' },
    { q: 'I am already selling through another company. Can you value my property?', a: 'Yes, if your contract with the other company is a general or exclusive agency contract. We can value the property and propose a purchase price. We can also advise on next steps based on your current situation.' },
    { q: 'Will you buy a property if the building is in poor condition?', a: 'In principle, yes, but some properties may not qualify for purchase. If a building is so old that it cannot be repaired, it is valued as land.' },
    { q: 'Can any type of property be bought?', a: 'We can buy ordinary property such as houses, apartments and land, as well as vacant homes, old apartment buildings, vacant land, leasehold land and leased-out land. Land in urbanisation control areas, rice paddies, fields and mountains can be difficult to buy, so please get in touch first.' },
    { q: 'I am divorcing and need to sell the property quickly. Is that possible?', a: 'Unlike a brokered sale, we deal directly with the seller, so we can act quickly. A sale can also be completed without neighbours finding out. We will accommodate your requirements, including the timing of the sale, as far as we can.' },
    { q: 'I inherited property from a parent and I do not know what to do with it. Can I talk to you?', a: 'Property transactions involve complicated law, and many people do not know what to do. We handle even difficult procedures, so the seller does not need to do much. Please tell us about your situation, and we will explain anything that is unclear.' },
    { q: 'I have a vacant home that I have left as it is. Can I sell it?', a: 'We handle everything in-house, so we can buy a vacant home even if rubbish has been left inside. If another company has turned down your property, please get in touch with us first.' },
    { q: 'I inherited a family home that is outside the prefecture. Can I sell it?', a: 'Even if the property is far away or outside the prefecture, you do not need to do anything. You do not need to travel to the property or to our office for the transaction. We are flexible, so please get in touch.' },
  ],
};

export const flowFor = (locale: Locale) => pick(locale, flowService.ja, flowService.en);
