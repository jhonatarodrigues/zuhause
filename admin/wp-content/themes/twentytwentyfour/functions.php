<?php
/**
 * Twenty Twenty-Four functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Twenty Twenty-Four
 * @since Twenty Twenty-Four 1.0
 */

/**
 * Register block styles.
 */

if ( ! function_exists( 'twentytwentyfour_block_styles' ) ) :
	/**
	 * Register custom block styles
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_block_styles() {

		register_block_style(
			'core/details',
			array(
				'name'         => 'arrow-icon-details',
				'label'        => __( 'Arrow icon', 'twentytwentyfour' ),
				/*
				 * Styles for the custom Arrow icon style of the Details block
				 */
				'inline_style' => '
				.is-style-arrow-icon-details {
					padding-top: var(--wp--preset--spacing--10);
					padding-bottom: var(--wp--preset--spacing--10);
				}

				.is-style-arrow-icon-details summary {
					list-style-type: "\2193\00a0\00a0\00a0";
				}

				.is-style-arrow-icon-details[open]>summary {
					list-style-type: "\2192\00a0\00a0\00a0";
				}',
			)
		);
		register_block_style(
			'core/post-terms',
			array(
				'name'         => 'pill',
				'label'        => __( 'Pill', 'twentytwentyfour' ),
				/*
				 * Styles variation for post terms
				 * https://github.com/WordPress/gutenberg/issues/24956
				 */
				'inline_style' => '
				.is-style-pill a,
				.is-style-pill span:not([class], [data-rich-text-placeholder]) {
					display: inline-block;
					background-color: var(--wp--preset--color--base-2);
					padding: 0.375rem 0.875rem;
					border-radius: var(--wp--preset--spacing--20);
				}

				.is-style-pill a:hover {
					background-color: var(--wp--preset--color--contrast-3);
				}',
			)
		);
		register_block_style(
			'core/list',
			array(
				'name'         => 'checkmark-list',
				'label'        => __( 'Checkmark', 'twentytwentyfour' ),
				/*
				 * Styles for the custom checkmark list block style
				 * https://github.com/WordPress/gutenberg/issues/51480
				 */
				'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			)
		);
		register_block_style(
			'core/navigation-link',
			array(
				'name'         => 'arrow-link',
				'label'        => __( 'With arrow', 'twentytwentyfour' ),
				/*
				 * Styles for the custom arrow nav link block style
				 */
				'inline_style' => '
				.is-style-arrow-link .wp-block-navigation-item__label:after {
					content: "\2197";
					padding-inline-start: 0.25rem;
					vertical-align: middle;
					text-decoration: none;
					display: inline-block;
				}',
			)
		);
		register_block_style(
			'core/heading',
			array(
				'name'         => 'asterisk',
				'label'        => __( 'With asterisk', 'twentytwentyfour' ),
				'inline_style' => "
				.is-style-asterisk:before {
					content: '';
					width: 1.5rem;
					height: 3rem;
					background: var(--wp--preset--color--contrast-2, currentColor);
					clip-path: path('M11.93.684v8.039l5.633-5.633 1.216 1.23-5.66 5.66h8.04v1.737H13.2l5.701 5.701-1.23 1.23-5.742-5.742V21h-1.737v-8.094l-5.77 5.77-1.23-1.217 5.743-5.742H.842V9.98h8.162l-5.701-5.7 1.23-1.231 5.66 5.66V.684h1.737Z');
					display: block;
				}

				/* Hide the asterisk if the heading has no content, to avoid using empty headings to display the asterisk only, which is an A11Y issue */
				.is-style-asterisk:empty:before {
					content: none;
				}

				.is-style-asterisk:-moz-only-whitespace:before {
					content: none;
				}

				.is-style-asterisk.has-text-align-center:before {
					margin: 0 auto;
				}

				.is-style-asterisk.has-text-align-right:before {
					margin-left: auto;
				}

				.rtl .is-style-asterisk.has-text-align-left:before {
					margin-right: auto;
				}",
			)
		);
	}
endif;

add_action( 'init', 'twentytwentyfour_block_styles' );

/**
 * Enqueue block stylesheets.
 */

if ( ! function_exists( 'twentytwentyfour_block_stylesheets' ) ) :
	/**
	 * Enqueue custom block stylesheets
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_block_stylesheets() {
		/**
		 * The wp_enqueue_block_style() function allows us to enqueue a stylesheet
		 * for a specific block. These will only get loaded when the block is rendered
		 * (both in the editor and on the front end), improving performance
		 * and reducing the amount of data requested by visitors.
		 *
		 * See https://make.wordpress.org/core/2021/12/15/using-multiple-stylesheets-per-block/ for more info.
		 */
		wp_enqueue_block_style(
			'core/button',
			array(
				'handle' => 'twentytwentyfour-button-style-outline',
				'src'    => get_parent_theme_file_uri( 'assets/css/button-outline.css' ),
				'ver'    => wp_get_theme( get_template() )->get( 'Version' ),
				'path'   => get_parent_theme_file_path( 'assets/css/button-outline.css' ),
			)
		);
	}
endif;

add_action( 'init', 'twentytwentyfour_block_stylesheets' );

/**
 * Register pattern categories.
 */

if ( ! function_exists( 'twentytwentyfour_pattern_categories' ) ) :
	/**
	 * Register pattern categories
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_pattern_categories() {

		register_block_pattern_category(
			'twentytwentyfour_page',
			array(
				'label'       => _x( 'Pages', 'Block pattern category', 'twentytwentyfour' ),
				'description' => __( 'A collection of full page layouts.', 'twentytwentyfour' ),
			)
		);
	}
endif;

add_action( 'init', 'twentytwentyfour_pattern_categories' );





// Adiciona o campo de thumbnail à REST API
function add_thumbnail_to_rest_response($response, $post, $request) {
    // Verifica se o post tem uma imagem destacada
    if (has_post_thumbnail($post->ID)) {
        // Obtém a URL da imagem destacada
        $thumbnail_url = get_the_post_thumbnail_url($post->ID, 'full');
        // Adiciona a URL da imagem destacada à resposta da API REST
        $response->data['thumbnail_url'] = $thumbnail_url;
    } else {
        // Se não houver imagem destacada, define o campo como null
        $response->data['thumbnail_url'] = null;
    }

    return $response;
}


function get_thumbnail_url($object, $field_name, $request) {
    // Verifica se o post tem uma imagem destacada
    if (has_post_thumbnail($object['id'])) {
        // Retorna a URL da imagem destacada
        return get_the_post_thumbnail_url($object['id'], 'full');
    }
    return null;
}



function remove_menus() {
    // Remove o menu de Posts
    remove_menu_page('edit.php');
    
    // Remove o menu de Mídia
    // remove_menu_page('upload.php');
    
    // Remove o menu de Páginas
    remove_menu_page('edit.php?post_type=page');
    
    // Remove o menu de Comentários
    remove_menu_page('edit-comments.php');
    
    // Remove o menu de Aparência
    remove_menu_page('themes.php');
    
    // Remove o menu de Plugins
    remove_menu_page('plugins.php');
    
    // Remove o menu de Usuários
    remove_menu_page('users.php');
    
    // Remove o menu de Ferramentas
    remove_menu_page('tools.php');
    
    // Remove o menu de Configurações
    remove_menu_page('options-general.php');
    
    // Remove o menu de Custom Post Type 'products'
    // remove_menu_page('edit.php?post_type=products');
}

add_action('admin_menu', 'remove_menus');


/* Custom Post Type Start */
function create_posttype_products() {
	register_post_type( 'products',
		array(
			'labels' => array(
			'name' => __( 'Produtos' ),
			'singular_name' => __( 'Produto' )
			),
			'public' => true,
			'has_archive' => false,
			'rewrite' => array('slug' => 'products'),
			'supports' => array( 'title'),
			'show_in_rest' => true // Adiciona suporte para a REST API
		)
	);
}
	// Hooking up our function to theme setup
add_action( 'init', 'create_posttype_products' );	


/* Custom Post Type Start */
function create_posttype_home_image() {
	register_post_type( 'home_image',
		array(
			'labels' => array(
			'name' => __( 'Imagem Home' ),
			'singular_name' => __( 'Imagem Home' )
			),
			'public' => true,
			'has_archive' => false,
			'rewrite' => array('slug' => 'home_image'),
			'supports' => array( 'title' ),
			'show_in_rest' => true 
		)
	);
}
	// Hooking up our function to theme setup
add_action( 'init', 'create_posttype_home_image' );	

/* Custom Post Type Start */
function create_posttype_banner() {
	register_post_type( 'banner',
		array(
			'labels' => array(
				'name' => __( 'Banners' ),
				'singular_name' => __( 'Banner' )
			),
			'public' => true,
			'has_archive' => false,
			'rewrite' => array('slug' => 'banner'),
			'supports' => array( 'title', 'thumbnail'),
			'show_in_rest' => true 
		)
	);
}
	// Hooking up our function to theme setup
add_action( 'init', 'create_posttype_banner' );	



// Hooking up our function to theme setup
add_action('rest_api_init', function() {
	// Adiciona o filtro para cada tipo de post que você deseja expor o thumbnail
	register_rest_field('products', 'thumbnail_url', array(
			'get_callback' => 'get_thumbnail_url',
			'update_callback' => null,
			'schema' => null,
	));
	register_rest_field('banner', 'thumbnail_url', array(
			'get_callback' => 'get_thumbnail_url',
			'update_callback' => null,
			'schema' => null,
	));
});


function expose_acf_fields_in_rest_api() {
    // Verifica se a função acf_add_local_field_group existe
    if (function_exists('acf_add_local_field_group')) {
        // Adiciona o filtro para o Custom Post Type 'products'
        add_filter('rest_prepare_products', 'add_acf_fields_to_rest_response', 10, 3);
        // Adiciona o filtro para o Custom Post Type 'home_image'
        add_filter('rest_prepare_home_image', 'add_acf_fields_to_rest_response', 10, 3);
    }
}

function add_acf_fields_to_rest_response($response, $post, $request) {
    // Obtém todos os campos ACF para o post atual
    $acf_fields = get_fields($post->ID);

    // Adiciona os campos ACF à resposta da API REST
    if ($acf_fields) {
        $response->data['acf'] = $acf_fields;
    }

    return $response;
}

// Hooking up our function to theme setup
add_action('init', 'expose_acf_fields_in_rest_api');

function redirect_to_admin_dashboard() {
	// Verifica se não está no painel de administração e se é a página inicial
	if (!is_admin() && is_front_page()) {
			// URL do painel de administração
			$admin_url = admin_url();
			
			// Realiza o redirecionamento
			wp_redirect($admin_url);
			exit();
	}
}
add_action('template_redirect', 'redirect_to_admin_dashboard');