<!DOCTYPE html>
<html lang="jp">
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico">
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>">
<?php wp_head();?>
</head>

<body>
<header class="header">
  <div class="mv"> <img src="<?php echo get_template_directory_uri(); ?>/img/top_img_pc.jpg" alt="タイムレスが商品の買取価格を一瞬で算出オンライン環境があれば初期投資は不要さぁ、ブランド買取を始めてみよう" class="img_responsive pc"/> <img src="<?php echo get_template_directory_uri(); ?>/img/top_img_sp.jpg" alt="タイムレスが商品の買取価格を一瞬で算出オンライン環境があれば初期投資は不要さぁ、ブランド買取を始めてみよう" class="img_responsive sp"/> </div>
</header>
<main class="main">
  <section class="intro section js_fadeup_trigger">
    <h2 class="section_title">買取事業を<br>
      誰でも簡単導入</h2>

    <div class="intro_text"> <span>ブランドバッグ、時計、宝石のプロフェッショナル</span> <span>【タイムレス】の査定システムが</span> <span>買取事業への参入障壁を解決します。</span> </div>
  </section>
  <section class="benefit section js_fadeup_trigger">
    <h2 class="section_title">大がかりな設備投資は不要！<br>
      ブランド買取ビジネスをすぐにスタートできます</h2>
    <div class="benefit_list container">
      <div class="benefit_list_item">
        <h3 class="benefit_item_title">初期投資不要！<sup class="sup">※1</sup></h3>
        <img src="<?php echo get_template_directory_uri(); ?>/img/icon_benefit01.svg" alt="初期投資不要" class="img_icon" />
        <div class="benefit_item_text">既存のスペース、<br>
          人材でサービス開始可能です。</div>
      </div>
      <div class="benefit_list_item">
        <h3 class="benefit_item_title">仕入保証！<sup class="sup">※2</sup></h3>
        <img src="<?php echo get_template_directory_uri(); ?>/img/icon_benefit02.svg" alt="仕入保証" class="img_icon" />
        <div class="benefit_item_text">買い取った商品は<br>タイムレスが仕入れます。<br>商品到着後すぐに代金を支払います。
          </div>
      </div>
      <div class="benefit_list_item">
        <h3 class="benefit_item_title">買取価格保障<sup class="sup">※3</sup></h3>
        <img src="<?php echo get_template_directory_uri(); ?>/img/icon_benefit03.svg" alt="買取価格保障" class="img_icon" />
        <div class="benefit_item_text">タイムレスは提示した価格を<br>きちんと保証いたします！
          </div>
      </div>
      <div class="benefit_list_item">
        <h3 class="benefit_item_title">真贋保障<sup class="sup">※4</sup></h3>
        <img src="<?php echo get_template_directory_uri(); ?>/img/icon_benefit04.svg" alt="真贋保障" class="img_icon" />
        <div class="benefit_item_text">タイムレスサポートスタッフにより<br>
          お客様は安心して買取ができます。</div>
      </div>
    </div>
    <div class="benefit_footer_text"> フランチャイズ加盟のようなロイヤリティの支払いも不要です。 </div>
    <div class="attention"> ※1：PCやインターネット通信費用などはお客様負担となります<br>
      ※2：商品到着から3営業日以内の振込になります<br>
    ※3：一部の商品(盗品や法令違反品など)をのぞき買取金額を保障させていただきます<br>
    ※4：査定時に適切な情報を得られないなどで、保障できない場合もあります</div>
  </section>
  <section class="riskpart section js_fadeup_trigger">
    <h2 class="section_title">一般的な買取FCのリスクパート</h2>
    <div class="container">
      <table class="riskpart_table">
        <thead>
          <tr>
            <?php if(!is_mobile()): ?>
            <th class="riskpart_table_title"></th>
            <?php endif; ?>
            <th class="oc riskpart_table_data">一般的な買取FC</th>
            <th class="tx riskpart_table_data">タイムレス<br class="sp">
              エクスプレス</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <?php if(!is_mobile()): ?><th>加盟料</th><?php endif; ?>
                <td class="oc"><?php if(is_mobile()): ?>加盟料<br><?php endif; ?>200万円~250万円</td>
                <td class="tx"><?php if(is_mobile()): ?>加盟料<br><?php endif; ?>5万円※</td>
              </tr>
              <tr>
                <?php if(!is_mobile()): ?><th>開業準備金</th><?php endif; ?>
                <td class="oc"><?php if(is_mobile()): ?>開業準備金<br><?php endif; ?>50万円~400万円</td>
                <td class="tx"><?php if(is_mobile()): ?>開業準備金<br><?php endif; ?>無料</td>
              </tr>
              <tr>
                <?php if(!is_mobile()): ?><th>研修費用</th><?php endif; ?>
                <td class="oc"><?php if(is_mobile()): ?>研修費用<br><?php endif; ?>100万円～200万円</td>
                <td class="tx"><?php if(is_mobile()): ?>研修費用<br><?php endif; ?>無料</td>
              </tr>
              <tr>
                <?php if(!is_mobile()): ?><th>物件費用</th><?php endif; ?>
                <td class="oc"><?php if(is_mobile()): ?>物件費用<br><?php endif; ?>100万円～300万円</td>
                <td class="tx"><?php if(is_mobile()): ?>物件費用<br><?php endif; ?>無料<br>既存店舗でサービス開始可能</td>
              </tr>
              <tr>
                <?php if(!is_mobile()): ?><th>本部FCロイヤリティ</th><?php endif; ?>
                <td class="oc"><?php if(is_mobile()): ?>本部FCロイヤリティ<br><?php endif; ?>月々30万円～</td>
                <td class="tx"><?php if(is_mobile()): ?>本部FCロイヤリティ<br><?php endif; ?>無料</td>
              </tr>
              <tr>
                <?php if(!is_mobile()): ?><th class="riskpart_table_total">開業費用合計</th><?php endif; ?>
                <td class="oc oc_total"><?php if(is_mobile()): ?>開業費用合計<br><?php endif; ?>480万円～1,180万円</td>
                <td class="tx tx_total"><?php if(is_mobile()): ?>開業費用合計<br><?php endif; ?>5万円</td>
              </tr>
            </tbody>
      </table>
      <div class="attention"> 
      ※一般入会のお客様には加盟金やロイヤリティが発生するケースがございます。<br>
      ※ただし加盟料支払いで、のぼり、計りなどスタートに必要なキット5万円相当をお届けします。</div>
    </div>
    <div class="riskpart_necessities js_fadeup_trigger">
      <div class="text_center">
        <div class="riskpart_necessities_title quote">これだけでスタートできます！</div>
      </div>
      <ul class="riskpart_necessities_list container">
        <li class="riskpart_necessities_list_item"> <img src="<?php echo get_template_directory_uri(); ?>/img/icon_necessities01.svg" alt="店頭告知ツール" class="img_icon" /> 店頭告知ツール<br>
          （のぼり等）</li>
        <li class="riskpart_necessities_list_item"><img src="<?php echo get_template_directory_uri(); ?>/img/icon_necessities02.svg" alt="ビデオ通話ができるPC" class="img_icon" /> ビデオ通話ができるPC<br>
          （Skype<sup class="sup">TM</sup>を利用）</li>
        <li class="riskpart_necessities_list_item"> <img src="<?php echo get_template_directory_uri(); ?>/img/icon_necessities03.svg" alt="計りなどの小物類" class="img_icon" /> 計りなどの小物類</li>
      </ul>
      <div class="attention"> ※加盟料支払いで、のぼり、計りなどスタートに必要なキット5万円相当をお届けします。PCは自社でご用意願います。 </div>
    </div>
  </section>
  <section class="step section js_fadeup_trigger">
    <h2 class="section_title">充実したサポートで<br>
      驚くほど簡単な買取ステップ！</h2>
    <ol class="step_list container">
      <li class="step_list_item">
        <div class="step_item_title">Step1</div>
        <img src="<?php echo get_template_directory_uri(); ?>/img/icon_step01.svg" alt="Step01" class="img_icon" />
        <div class="step_item_text">お客様から<br>
          査定する品物を預かる</div>
      </li>
      <li class="step_list_item">
        <div class="step_item_title">Step2</div>
        <img src="<?php echo get_template_directory_uri(); ?>/img/icon_step02.svg" alt="Step02" class="img_icon" />
        <div class="step_item_text">タイムレスのシステムを使って<br>
          商品確認と買取価格の算出</div>
      </li>
      <li class="step_list_item">
        <div class="step_item_title">Step3</div>
        <img src="<?php echo get_template_directory_uri(); ?>/img/icon_step03.svg" alt="Step03" class="img_icon" />
        <div class="step_item_text">買取価格をもとに<br>
          お客様と契約</div>
      </li>
      <li class="step_list_item">
        <div class="step_item_title">Step4</div>
        <img src="<?php echo get_template_directory_uri(); ?>/img/icon_step04.svg" alt="Step04" class="img_icon" />
        <div class="step_item_text">買取した商品を<br>
          タイムレスに発送</div>
      </li>
    </ol>
    <div class="text_center">
      <div class="step_footer_text quote">検品後、即ご入金！</div>
    </div>
    <div class="attention"> ※査定のみのご依頼は受け付けておりません（不成立の場合を除く） </div>
  </section>
  <section class="alliance section js_fadeup_trigger">
    <h2 class="section_title">提携パートナー</h2>
    <ul class="alliance_list">
      <li class="alliance_list_item"> <a href="https://www.carcon.co.jp/" target="_blank" rel="noopener noreferrer"> <img class="img_responsive" src="<?php echo get_template_directory_uri(); ?>/img/logo_carcon.co.jp.png" alt="カーコンビニ倶楽部" > </a> </li>
    </ul>
  </section>
  <section class="about section js_fadeup_trigger">
    <h2 class="section_title">タイムレスとは？</h2>
    <div class="about_desc">株式会社BuySell Technologies(東証マザーズ上場）のグループ会社</div>
    <div class="about_list container">
      <div class="about_list_item">
        <div class="about_item_title">総合買取サロン<br>
          TIMELESSの運営</div>
        <a href="https://timeless-kaitori.com/" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/img/kaitori_logo.svg" alt="総合買取サロン" class="img_icon" /></a>
        <div class="about_item_text">全国の百貨店に店舗を構え、<br>
          高品質な買取サービスを提供。<br>
          全国11店舗展開<br>
          取引百貨店は50社以上！</div>
      </div>
      <div class="about_list_item">
        <div class="about_item_title">タイムレスオークションの<br>
          運営</div>
        <a href="https://timeless-auction.com/" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/img/auction_logo.svg" alt="タイムレスオークション" class="img_icon" /></a>
        <div class="about_item_text">年間取引点数20万点以上の<br>
          BtoBオークションを運営。<br>
          自社オークションで集まった相場情報をもとに<br>
          リアルな買取価格を提供可能！</div>
      </div>
      <div class="about_list_item">
        <div class="about_item_title">全国の質屋<br>
          買取店との取引実績</div>
        <img src="<?php echo get_template_directory_uri(); ?>/img/icon_japanmap.svg" alt="全国の質屋買取店との取引実績" class="img_icon" />
        <div class="about_item_text">タイムレスエクスプレスは<br>
          すでに全国500件以上のお客様に<br>
          遠隔査定サービスを展開中です</div>
      </div>
    </div>
  </section>
  <section class="market section js_fadeup_trigger">
    <h2 class="section_title">リユース業界について</h2>
    <div class="container">
      <section class="market_section">
        <div class="market_section_contents">
          <h3 class="market_contents_title">リユース市場推移</h3>
          <div class="market_contents_text">リユース市場は順調に成長基調にあり、2017年で約2兆円。2025年に約3.2兆円規模まで成長。</div>
        </div>
        <div class="market_section_images"> <img class="img_responsive" src="<?php echo get_template_directory_uri(); ?>/img/graph_1.svg" alt="リユース市場推移"> <cite class="market_images_cite">出典：「データでみるリユース市場 最新版 」リサイクル通信2019年5月11日付調査結果</cite> </div>
      </section>
      <section class="market_section">
        <div class="market_section_contents">
          <h3 class="market_contents_title">かくれ資産</h3>
          <div class="market_contents_text">潜在的なリユース市場規模を示す、「かくれ資産」の日本における総額は、2018年時点で約37兆円と推計。<br>
            かくれ資産として今後追加されることになる過去一年間に不要となった品物の規模も約7兆6,000億円と試算され、リユース市場の成長ポテンシャルは大きい。<br>
            ※かくれ資産：自宅内の一年以上利用されていない不用品の推定価値</div>
        </div>
        <div class="market_section_images"> <img class="img_responsive" src="<?php echo get_template_directory_uri(); ?>/img/graph_2.svg" alt="かくれ資産"> <cite class="market_images_cite">出典：「中古ビジネスデータブック2018 」リサイクル通信 、経済産業省「平成29年度 我が国におけるデータ駆動型社会に係る基盤整備（電子商取引に関する市場調査 ）、ニッセイ基礎研究所監修平成30年11月7日付調査結果より当社作成</cite> </div>
      </section>
    </div>
  </section>
  <section class="contact section js_fadeup_trigger">
    <h2 class="section_title">お問い合わせ</h2>
    <div class="contact_desc">サービスに関すること、取材のお問い合わせなどお気軽にご連絡くださいませ。<br>
      <strong>お申込みは下記お問い合わせから可能です。</strong><br>
      後日、担当者よりご連絡させていただきます。<br>
    </div>
    <div class="contact_form"> <?php echo do_shortcode( '[contact-form-7 id="16" title="TIMELESS EXPRESSフォーム"]' ); ?> </div>
  </section>
  
  <!-- <section id="faq" class="faq section">
        <div class="container inner">
          <h2 class="section_title">よくあるご質問 <small class="font-al">FAQ</small></h2>
          <dl class="faq-item">
            <dt class="faq-item-title accordion-trigger">誰でも参加できますか？</dt>
            <dd class="faq-item-data">古物商許可免許を取得の方であれば、原則的にどなたでも参加できます。<br>新規のご参加の場合、古物商免許証のコピーが必要となります。</dd>
          </dl>
          <dl class="faq-item">
            <dt class="faq-item-title accordion-trigger">参加したいのですが、どのようにしたらよいのですか？</dt>
            <dd class="faq-item-data">入会申込みフォームよりお願いいたします。<br><a class="link" href="<?php echo home_url(); ?>/regist/">入会申込みフォームはこちら</a></dd>
          </dl>
          <dl class="faq-item">
            <dt class="faq-item-title accordion-trigger">オークションの方法はどのようになっていますか？</dt>
            <dd class="faq-item-data">オークションはオンラインでの競り上がり方式となります。<br>入札締め切り時間までご入札いただき、その金額が一番高い方の落札となります。</dd>
          </dl>
          <dl class="faq-item">
            <dt class="faq-item-title accordion-trigger">清算はどのように行われますか？</dt>
            <dd class="faq-item-data">お振込みでのご精算になります。<br>出品商品の清算は入札締め切り日翌日より３営業日以内にお支払（振込）させていただきます。</dd>
          </dl>
          <dl class="faq-item">
            <dt class="faq-item-title accordion-trigger">オークションに出席できないのですが、出品はできますか？</dt>
            <dd class="faq-item-data">出席されない場合でも出品はお受けしております。<br>前週金曜日までに出品の意思をご連絡いただいた上で商品と商品リストを火曜日までに会場までご郵送お願いいたします。<div class="attention">※バッグオークションのみ</div></dd>
          </dl>
        </div>
      </section> --> 
</main>
<footer class="footer">
  <div class="company_logo">
    <svg class="company_logo_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.27 14.78">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path class="company_logo_path" d="M23.75,4.42a2.1,2.1,0,0,1,0,.27.6.6,0,0,1,0,.18.3.3,0,0,1-.07.11.16.16,0,0,1-.09,0H21.75v5.75a.13.13,0,0,1,0,.1.23.23,0,0,1-.11.07,1,1,0,0,1-.23.05h-.7a.9.9,0,0,1-.22-.05.22.22,0,0,1-.12-.07.18.18,0,0,1,0-.1V5H18.51a.17.17,0,0,1-.1,0,.29.29,0,0,1-.06-.11.56.56,0,0,1-.05-.18c0-.07,0-.16,0-.27s0-.21,0-.28A.74.74,0,0,1,18.35,4a.24.24,0,0,1,.06-.1.17.17,0,0,1,.1,0h5a.16.16,0,0,1,.09,0,.26.26,0,0,1,.07.1.78.78,0,0,1,0,.19A2.27,2.27,0,0,1,23.75,4.42Z"/>
          <path class="company_logo_path" d="M27.83,10.76a.18.18,0,0,1,0,.1.22.22,0,0,1-.12.07.9.9,0,0,1-.22.05h-.7a1,1,0,0,1-.23-.05.23.23,0,0,1-.11-.07.13.13,0,0,1,0-.1V4a.13.13,0,0,1,0-.1.22.22,0,0,1,.12-.07,1,1,0,0,1,.22,0l.35,0,.35,0a1,1,0,0,1,.22,0,.22.22,0,0,1,.12.07.18.18,0,0,1,0,.1Z"/>
          <path class="company_logo_path" d="M39.47,10.76a.17.17,0,0,1,0,.1.19.19,0,0,1-.11.07.81.81,0,0,1-.21.05h-.67l-.21-.05a.3.3,0,0,1-.11-.07.17.17,0,0,1,0-.1V5h0L36,10.76a.37.37,0,0,1-.07.12.37.37,0,0,1-.14.07,1,1,0,0,1-.21,0H35a1,1,0,0,1-.22,0,.47.47,0,0,1-.14-.08.21.21,0,0,1-.06-.1L32.54,5h0v5.81a.17.17,0,0,1,0,.1.23.23,0,0,1-.11.07,1,1,0,0,1-.22.05h-.66a.81.81,0,0,1-.21-.05.19.19,0,0,1-.11-.07.17.17,0,0,1,0-.1V4.4A.57.57,0,0,1,31.3,4a.55.55,0,0,1,.4-.15h.95a2.76,2.76,0,0,1,.44,0A1,1,0,0,1,33.4,4a.8.8,0,0,1,.22.26,2,2,0,0,1,.16.38L35.32,8.9h0l1.6-4.24a2.21,2.21,0,0,1,.16-.4A1.06,1.06,0,0,1,37.3,4a.69.69,0,0,1,.27-.14,1.78,1.78,0,0,1,.35,0h1a1,1,0,0,1,.26,0,.42.42,0,0,1,.17.11.5.5,0,0,1,.11.19.88.88,0,0,1,0,.24Z"/>
          <path class="company_logo_path" d="M47,10.39a2.1,2.1,0,0,1,0,.27.61.61,0,0,1,0,.17.2.2,0,0,1-.07.1.16.16,0,0,1-.09,0H43.23a.44.44,0,0,1-.3-.11.42.42,0,0,1-.13-.35V4.28a.42.42,0,0,1,.13-.35.44.44,0,0,1,.3-.11H46.8a.16.16,0,0,1,.09,0A.29.29,0,0,1,47,4a.61.61,0,0,1,0,.17,2.16,2.16,0,0,1,0,.28,1.84,1.84,0,0,1,0,.26.61.61,0,0,1,0,.17.29.29,0,0,1-.06.1.16.16,0,0,1-.09,0H44.25V6.7h2.16a.16.16,0,0,1,.09,0,.29.29,0,0,1,.07.1,1.46,1.46,0,0,1,0,.17,2,2,0,0,1,0,.26,1.93,1.93,0,0,1,0,.26,1.46,1.46,0,0,1,0,.17.35.35,0,0,1-.07.09l-.09,0H44.25v2h2.57a.16.16,0,0,1,.09,0A.26.26,0,0,1,47,10a.71.71,0,0,1,0,.17A2.26,2.26,0,0,1,47,10.39Z"/>
          <path class="company_logo_path" d="M54,10.35c0,.11,0,.21,0,.28a.74.74,0,0,1,0,.19.23.23,0,0,1-.06.11.17.17,0,0,1-.1,0H50.52a.47.47,0,0,1-.31-.11.45.45,0,0,1-.12-.35V4a.17.17,0,0,1,0-.1.35.35,0,0,1,.12-.07l.23,0,.35,0,.35,0,.22,0a.35.35,0,0,1,.12.07.17.17,0,0,1,0,.1V9.76h2.25a.17.17,0,0,1,.1,0,.24.24,0,0,1,.06.1.74.74,0,0,1,0,.19C54,10.15,54,10.24,54,10.35Z"/>
          <path class="company_logo_path" d="M60.87,10.39c0,.11,0,.2,0,.27a.58.58,0,0,1,0,.17.15.15,0,0,1-.07.1.12.12,0,0,1-.09,0H57.07a.47.47,0,0,1-.31-.11.45.45,0,0,1-.12-.35V4.28a.45.45,0,0,1,.12-.35.47.47,0,0,1,.31-.11h3.56l.09,0a.2.2,0,0,1,.07.1,1.46,1.46,0,0,1,0,.17,2.35,2.35,0,0,1,0,.28,2,2,0,0,1,0,.26,1.46,1.46,0,0,1,0,.17.2.2,0,0,1-.07.1l-.09,0H58.08V6.7h2.16a.16.16,0,0,1,.09,0,.2.2,0,0,1,.07.1.61.61,0,0,1,0,.17,1.84,1.84,0,0,1,0,.26,1.72,1.72,0,0,1,0,.26.61.61,0,0,1,0,.17.22.22,0,0,1-.07.09.16.16,0,0,1-.09,0H58.08v2h2.57a.12.12,0,0,1,.09,0,.18.18,0,0,1,.07.1.69.69,0,0,1,0,.17C60.86,10.2,60.87,10.29,60.87,10.39Z"/>
          <path class="company_logo_path" d="M68.15,8.82a2.22,2.22,0,0,1-.21,1,2.18,2.18,0,0,1-.56.71,2.37,2.37,0,0,1-.84.42,3.42,3.42,0,0,1-1,.15,3.64,3.64,0,0,1-1.25-.21,3.11,3.11,0,0,1-.4-.18,1.63,1.63,0,0,1-.24-.16.51.51,0,0,1-.1-.21,1.92,1.92,0,0,1,0-.39c0-.11,0-.21,0-.29a.69.69,0,0,1,0-.18.23.23,0,0,1,.07-.11.12.12,0,0,1,.09,0,.46.46,0,0,1,.22.09,2.66,2.66,0,0,0,.36.21,3.49,3.49,0,0,0,.53.2,2.5,2.5,0,0,0,.71.09A1.41,1.41,0,0,0,66,9.85a1.2,1.2,0,0,0,.36-.17.89.89,0,0,0,.22-.29A1,1,0,0,0,66.65,9a.68.68,0,0,0-.14-.42,1.29,1.29,0,0,0-.34-.31A3.57,3.57,0,0,0,65.69,8l-.56-.25a6,6,0,0,1-.56-.3,2.09,2.09,0,0,1-.48-.41,1.7,1.7,0,0,1-.34-.55,2,2,0,0,1-.14-.77,2.13,2.13,0,0,1,.19-.9,1.81,1.81,0,0,1,.52-.64,2.28,2.28,0,0,1,.76-.39A3.48,3.48,0,0,1,66,3.7a4.07,4.07,0,0,1,.5,0l.48.11a1.76,1.76,0,0,1,.39.15.84.84,0,0,1,.23.14.28.28,0,0,1,.07.09.29.29,0,0,1,0,.1.7.7,0,0,1,0,.16,1.77,1.77,0,0,1,0,.24,2.1,2.1,0,0,1,0,.27.42.42,0,0,1,0,.18.23.23,0,0,1,0,.11.17.17,0,0,1-.1,0,.38.38,0,0,1-.19-.08L67,5.07a3.12,3.12,0,0,0-.44-.17A2,2,0,0,0,66,4.83a1.58,1.58,0,0,0-.41,0,1.06,1.06,0,0,0-.3.16.64.64,0,0,0-.18.25,1,1,0,0,0,0,.3.63.63,0,0,0,.13.41,1.14,1.14,0,0,0,.34.31,3.87,3.87,0,0,0,.5.26l.56.25a6,6,0,0,1,.56.3,2.14,2.14,0,0,1,.49.4,1.84,1.84,0,0,1,.35.55A1.9,1.9,0,0,1,68.15,8.82Z"/>
          <path class="company_logo_path" d="M75.27,8.82a2.22,2.22,0,0,1-.21,1,2.08,2.08,0,0,1-.57.71,2.37,2.37,0,0,1-.84.42,3.42,3.42,0,0,1-1,.15,3.66,3.66,0,0,1-.68-.06,3.47,3.47,0,0,1-.56-.15A3.31,3.31,0,0,1,71,10.7a1.43,1.43,0,0,1-.23-.16.41.41,0,0,1-.1-.21,1.92,1.92,0,0,1,0-.39,2.53,2.53,0,0,1,0-.29.74.74,0,0,1,0-.18.23.23,0,0,1,.07-.11.17.17,0,0,1,.1,0,.43.43,0,0,1,.21.09c.1.07.22.13.36.21a4,4,0,0,0,.53.2,2.55,2.55,0,0,0,.71.09,1.37,1.37,0,0,0,.47-.07,1.2,1.2,0,0,0,.36-.17.77.77,0,0,0,.22-.29A1,1,0,0,0,73.76,9a.68.68,0,0,0-.13-.42,1.34,1.34,0,0,0-.35-.31A3.57,3.57,0,0,0,72.8,8l-.56-.25a5.86,5.86,0,0,1-.55-.3,2.37,2.37,0,0,1-.49-.41,1.89,1.89,0,0,1-.34-.55,2,2,0,0,1-.13-.77,2,2,0,0,1,.19-.9,1.79,1.79,0,0,1,.51-.64,2.38,2.38,0,0,1,.76-.39,3.48,3.48,0,0,1,.93-.12,4.36,4.36,0,0,1,.51,0l.47.11a1.76,1.76,0,0,1,.39.15.71.71,0,0,1,.23.14.32.32,0,0,1,.08.09l0,.1s0,.1,0,.16v.24a2.1,2.1,0,0,1,0,.27.74.74,0,0,1,0,.18s0,.09-.06.11a.12.12,0,0,1-.09,0,.37.37,0,0,1-.2-.08l-.32-.16a3.28,3.28,0,0,0-.45-.17,2,2,0,0,0-.56-.07,1.64,1.64,0,0,0-.41,0,1.06,1.06,0,0,0-.3.16.74.74,0,0,0-.17.25.8.8,0,0,0-.06.3.63.63,0,0,0,.13.41,1.18,1.18,0,0,0,.35.31,3.72,3.72,0,0,0,.49.26l.56.25q.28.13.57.3a2.68,2.68,0,0,1,.49.4,1.82,1.82,0,0,1,.34.55A1.89,1.89,0,0,1,75.27,8.82Z"/>
          <path class="company_logo_path" d="M14.42,6.25,8.53.36C7.9-.27,7.39,0,7.39.83v5A1.62,1.62,0,0,0,9,7.39H14C14.84,7.39,15.05,6.88,14.42,6.25Z"/>
          <path class="company_logo_path" d="M5.78,7.39H.83C0,7.39-.27,7.9.36,8.53l5.89,5.89c.63.63,1.14.42,1.14-.47V9A1.62,1.62,0,0,0,5.78,7.39Z"/>
        </g>
      </g>
    </svg>
  </div>
  <p id="page-top"><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/backto-top.svg" alt="TOPへ戻る" class="page-top" /></a></p>
  <p class="copyright">&copy; <?php echo date('Y'); ?> TIMELESS</p>
</footer>
</body>
<?php wp_footer(); ?>
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
</html>