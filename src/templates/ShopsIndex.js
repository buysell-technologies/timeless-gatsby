import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import "../styles/kaitori_common.scss";

const ShopsIndex = ({ pageContext }) => {
  const { shops } = pageContext // gatsby-node.js の createPage(context) から受け取ったデータ

  return (
    <>
      <Helmet htmlAttributes={{ lang: "ja" }}>
        <title>店舗 - 買取サロンタイムレス</title>
        <meta
          name="description"
          content="当社、総合買取サロンタイムレス〈TIMELESS〉の店舗一覧をご紹介します。...（省略）"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Layout>
        <div class="mv" style="background-image: url(<?php echo esc_url( get_template_directory_uri() ); ?>/img/mv_shop.png);">
          <h1 class="mv_title">店舗一覧</h1>
        </div>
        <div class="section area">
          <div class="container">
            <h2 class="article_title">タイムレス 店舗一覧</h2>
            <?php
              $area_terms = get_terms( 'area', 'hide_empty=true&parent=3&order=ASC&orderby=slug&exclude=3,154' );
            ?>
            <div class="area_wrap pc">
              <div class="area_select"><span class="area_select_inner">地域を選択</span></div>
              <ul class="area_list">
                <?php foreach ( $area_terms as $area_term ) : ?>
                  <li class="area_item"><a href="#<?php echo esc_attr( $area_term->slug ); ?>" class="area_link"><?php echo esc_html( $area_term->name ); ?></a></li>
                <?php endforeach; ?>
              </ul>
            </div>
            <div class="area_wrap sp">
              <div class="area_select js_accordion_trigger"><span class="area_select_inner">地域を選択</span></div>
              <ul class="area_list">
                <?php foreach ( $area_terms as $area_term ) : ?>
                  <li class="area_item"><a href="#<?php echo esc_attr( $area_term->slug ); ?>" class="area_link"><?php echo esc_html( $area_term->name ); ?></a></li>
                <?php endforeach; ?>
              </ul>
            </div>
            <?php foreach ( $area_terms as $area_term ) : ?>
              <div class="shop_title" id="<?php echo esc_attr( $area_term->slug ); ?>"><?php echo esc_html( $area_term->name ); ?></div>
              <div class="shop_wrap">
                <?php
                $args       = array(
                  'post_type'      => 'shop',
                  // phpcs:ignore WPThemeReview.CoreFunctionality.PostsPerPage.posts_per_page_posts_per_page
                  'posts_per_page' => -1,
                  'orderby'        => 'date',
                  'order'          => 'ASC',
                  'tax_query'      => array(
                    array(
                      'taxonomy' => 'area',
                      'field'    => 'slug',
                      'terms'    => $area_term->slug,
                      'order'    => 'ASC',
                    ),
                  ),
                );
                $shop_query = new WP_Query( $args );
                if ( $shop_query->have_posts() ) :
                  while ( $shop_query->have_posts() ) :
                    $shop_query->the_post();
                    ?>
                    <div class="shop_list_row">
                      <div class="shop_list_col">
                        <span class="shop_item_img">
                          <a class="shop_item_img_link" href="<?php the_permalink(); ?>">
                            <?php if ( has_post_thumbnail() ) : ?>
                              <?php the_post_thumbnail( array( 320, 240 ) ); ?>
                            <?php else : ?>
                              <img width="320" height="240" src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/no_image.png" alt="No Image">
                            <?php endif; ?>
                          </a>
                        </span>
                      </div>
                      <div class="shop_list_col">
                        <div class="shop_item_info"> <span class="shop_item_name">
                            <?php the_title(); ?>
                          </span> <span class="shopp_item_add">
                            〒<?php the_field( 'shop_zipcode' ); ?>
                            <br>
                            <?php the_field( 'shop_address' ); ?>
                          </span> <span class="shopp_item_biz_hours">営業時間：
                            <?php the_field( 'shop_time' ); ?>
                          </span>
                          <?php
                          /*
                          // phpcs:disable
                          <span class="shopp_tel"><a href="tel:<?php the_field( 'shop_tel' ); ?>" class="shop_tel_link">TEL：
                          <?php the_field( 'shop_tel' ); ?>
                          </a></span>
                          // phpcs:enable
                          */
                          ?>
                          <span class="shop_other_time">
                            <?php
                            $other_time = get_field( 'other_time' );
                            if ( mb_strlen( $other_time, 'UTF-8' ) > 100 ) {
                              $text = mb_substr( wp_strip_all_tags( $other_time ), 0, 100, 'UTF-8' );
                              echo '<a class="other_time_link" href="' . esc_url( get_permalink() ) . '/#shop_info">';
                              echo esc_html( $text ) . '&#133; 続きを読む&#8811;';
                              echo '</a>';
                            } else {
                              echo wp_kses_post( $other_time );
                            }
                            ?>
                          </span>
                        </div>
                      </div>
                      <div class="shop_list_col"> <a class="shop_item_link" href="<?php the_permalink(); ?>"> 詳細はコチラ </a> </div>
                    </div>
                    <?php
                  endwhile;
                  endif;
                wp_reset_postdata();
                ?>
              </div>
              <?php endforeach; ?>
            <!-- 選べる買取方法 -->
            <?php get_template_part( 'module/parts/howtokaitori' ); ?>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ShopsIndex
