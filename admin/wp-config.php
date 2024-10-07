<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'zuhause' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.G7%R bgDi<hp1gk*^XjEwiMx+aewm(VvN})V6=w<`)u#QNEA@hLp=;F77#&WWMU' );
define( 'SECURE_AUTH_KEY',  'W@.pP~pR4_t[1FTZ<w.9lbG>tz+J]f}0pjRr;,B|8|*x%Lryb@u<4|c_b(*g>6ui' );
define( 'LOGGED_IN_KEY',    'O+Xq0i;18pGGi9h.Mz4ZJ51G)?C ND`Ri!2LpK&mG@j3yV.9Kgs}<>V%zXE^~~k4' );
define( 'NONCE_KEY',        'TS3W*^hd?|]S)BF=+K-i`![ozqnn4[i);|rH#e;gE:TOxlU-1/#{|5@C)NXP^BGy' );
define( 'AUTH_SALT',        'u?8o)ZQ/$.zz:No479Du}ZxVmATHuk1=tFFPV]`S{>g!}_[8cqj@NMPqKviR5&1#' );
define( 'SECURE_AUTH_SALT', '<{zfx} b9_z:2Yy,g@bNN6NWq<^b|Tr^`);2OO/jFE@]2G1=u ::K6~i6K>+?DiB' );
define( 'LOGGED_IN_SALT',   'dj&2<C3mZPra:MV6NSTvI_0^2-vRP:WaN]i(doEXC{avU/TvJ>-0l0K>oW^:1fMC' );
define( 'NONCE_SALT',       'o>t]RfEY7_O1:M@E4*1.zi`|)ziGdDim%e+-AIbiKHJTFu!=Z%l8ZJHu&[YzN{Cu' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
