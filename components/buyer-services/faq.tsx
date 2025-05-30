"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function BuyerServicesFaq() {
  const faqItems = [
    {
      question: "Как рассчитывается стоимость услуг баера?",
      answer:
        "Стоимость услуг баера составляет 3% от стоимости товара. Дополнительно оплачивается стоимость доставки из Китая в Россию по тарифу 570 рублей за килограмм (вес рассчитывается до граммов).",
    },
    {
      question: "Сколько времени занимает доставка товаров из Китая?",
      answer:
        "Сроки доставки зависят от выбранного способа доставки и региона. В среднем доставка занимает 15-25 дней. Точные сроки мы сообщаем при оформлении заказа.",
    },
    {
      question: "Можно ли заказать товар, если у меня есть только фотография?",
      answer:
        "Да, мы предоставляем услугу поиска товаров по фотографии бесплатно. Наши специалисты проанализируют изображение и найдут аналогичные товары на китайских площадках.",
    },
    {
      question: "Как проверяется качество товаров перед отправкой?",
      answer:
        "Мы проводим визуальный осмотр каждого товара, проверяем его на наличие дефектов, соответствие заявленным характеристикам и комплектацию. Также делаем фотографии товара перед отправкой. При обнаружении брака мы свяжемся с вами для решения вопроса о возврате или замене.",
    },
    {
      question: "Что делать, если товар пришел с браком или не соответствует описанию?",
      answer:
        "Если товар имеет брак, который не был обнаружен при проверке, или не соответствует описанию, мы поможем вам оформить возврат или обмен в соответствии с политикой продавца. В случае если возврат невозможен, мы предложим компенсацию в рамках нашей гарантии качества.",
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer:
        "Мы принимаем оплату банковскими картами российских банков, через СБП, электронными кошельками, а также наличными в нашем офисе во Владивостоке.",
    },
    {
      question: "Можно ли отследить статус моего заказа?",
      answer:
        "Да, после оформления заказа вы получите доступ к отслеживанию его статуса. Мы будем информировать вас о ключевых этапах: подтверждение заказа, выкуп товара, получение на склад, отправка в Россию, прохождение таможни и доставка до конечного пункта.",
    },
    {
      question: "Как происходит консолидация посылок?",
      answer:
        "Консолидация посылок происходит бесплатно. Мы объединяем несколько ваших заказов в одну посылку, что позволяет сэкономить на доставке. Все товары упаковываются надежно, чтобы избежать повреждений при транспортировке.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b-2">
          <AccordionTrigger className="text-left text-base font-medium hover:text-orange-500">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
