/**
 * File: src/styles/theme.ts
 * Author: Senior Software Development Team
 * Date: October 7, 2025
 * 
 * Description:
 * Central design system theme configuration for the LMS Migration Monitor application.
 * Defines all colors, typography, spacing, shadows, and styling constants used throughout
 * the application. Ensures consistent visual design and maintainable styling.
 * Optimized for professional B2B technical monitoring interface with emphasis on
 * data readability and status visualization.
 * 
 * Design Patterns Used:
 * - Strategy Pattern: Theme can be swapped (light/dark mode)
 * - Configuration Pattern: Centralized styling configuration
 * 
 * Design Principles:
 * - Single Source of Truth: All design tokens in one place
 * - DRY: Prevents duplicate color/spacing values across components
 * - Open/Closed: Easy to extend with new theme variants
 * - Accessibility: WCAG AA compliant color contrasts
 */

/**
 * Color Palette
 * Professional color scheme optimized for technical dashboards and data visualization.
 * All colors are WCAG AA compliant for accessibility.
 */
export const Colors = {
  // Primary Brand Colors - Professional blue palette for technical applications
  primary: {
    main: '#0066CC',        // Primary action color
    light: '#3385D6',       // Hover states, lighter variants
    dark: '#004C99',        // Pressed states, emphasis
    contrast: '#FFFFFF',    // Text on primary background
  },

  // Secondary Colors - Accent colors for visual hierarchy
  secondary: {
    main: '#6B7280',        // Secondary actions, less emphasis
    light: '#9CA3AF',       // Disabled states, subtle elements
    dark: '#4B5563',        // Secondary text, icons
    contrast: '#FFFFFF',    // Text on secondary background
  },

  // Status Colors - Critical for ETL job monitoring and migration status
  status: {
    success: '#10B981',     // Completed jobs, successful transformations
    successLight: '#D1FAE5', // Success backgrounds
    warning: '#F59E0B',     // In-progress, warnings, attention needed
    warningLight: '#FEF3C7', // Warning backgrounds
    error: '#EF4444',       // Failed jobs, errors, critical issues
    errorLight: '#FEE2E2',  // Error backgrounds
    info: '#3B82F6',        // Information, neutral notifications
    infoLight: '#DBEAFE',   // Info backgrounds
    pending: '#8B5CF6',     // Queued jobs, pending status
    pendingLight: '#EDE9FE', // Pending backgrounds
  },

  // ETL Job Status Colors - Specific to data pipeline monitoring
  etl: {
    extracting: '#3B82F6',  // Data extraction phase
    transforming: '#F59E0B', // Data transformation phase
    loading: '#8B5CF6',     // Data loading phase
    validating: '#06B6D4',  // Data validation phase
    completed: '#10B981',   // Job completed successfully
    failed: '#EF4444',      // Job failed
    paused: '#6B7280',      // Job paused/suspended
    cancelled: '#9CA3AF',   // Job cancelled
  },

  // Neutral/Grayscale - Base UI colors
  neutral: {
    white: '#FFFFFF',
    gray50: '#F9FAFB',      // Lightest background
    gray100: '#F3F4F6',     // Light background, cards
    gray200: '#E5E7EB',     // Borders, dividers
    gray300: '#D1D5DB',     // Disabled elements
    gray400: '#9CA3AF',     // Placeholder text
    gray500: '#6B7280',     // Secondary text
    gray600: '#4B5563',     // Primary text (light mode)
    gray700: '#374151',     // Headings, emphasis
    gray800: '#1F2937',     // Dark backgrounds
    gray900: '#111827',     // Darkest backgrounds
    black: '#000000',
  },

  // Background Colors
  background: {
    primary: '#FFFFFF',     // Main background
    secondary: '#F9FAFB',   // Secondary background, cards
    tertiary: '#F3F4F6',    // Tertiary background, nested cards
    modal: 'rgba(0, 0, 0, 0.5)', // Modal overlay
  },

  // Text Colors
  text: {
    primary: '#111827',     // Primary text color
    secondary: '#6B7280',   // Secondary text, descriptions
    disabled: '#9CA3AF',    // Disabled text
    inverse: '#FFFFFF',     // Text on dark backgrounds
    link: '#0066CC',        // Hyperlinks
  },

  // Border Colors
  border: {
    light: '#E5E7EB',       // Light borders
    main: '#D1D5DB',        // Standard borders
    dark: '#9CA3AF',        // Emphasized borders
    focus: '#0066CC',       // Focus states
  },

  // Chart Colors - For data visualization
  charts: {
    blue: '#3B82F6',
    green: '#10B981',
    yellow: '#F59E0B',
    red: '#EF4444',
    purple: '#8B5CF6',
    cyan: '#06B6D4',
    pink: '#EC4899',
    orange: '#F97316',
  },
};

/**
 * Typography System
 * Consistent font sizing, weights, and line heights for text hierarchy.
 */
export const Typography = {
  // Font Families
  fontFamily: {
    primary: 'System',      // iOS: San Francisco, Android: Roboto
    monospace: 'Courier',   // For code, technical data
  },

  // Font Sizes - Using 4px base scale for consistency
  fontSize: {
    xs: 12,                 // Small labels, captions
    sm: 14,                 // Secondary text, descriptions
    base: 16,               // Body text, standard content
    lg: 18,                 // Emphasized text
    xl: 20,                 // Subheadings
    '2xl': 24,              // Section headers
    '3xl': 30,              // Page titles
    '4xl': 36,              // Large display text
    '5xl': 48,              // Hero text
  },

  // Font Weights - Must match React Native's TextStyle fontWeight type
  fontWeight: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },

  // Line Heights - Relative to font size for readability
  lineHeight: {
    tight: 1.2,             // Headings
    normal: 1.5,            // Body text
    relaxed: 1.75,          // Long-form content
  },

  // Letter Spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
  },
};

/**
 * Spacing System
 * Consistent spacing scale based on 4px base unit for layouts and components.
 */
export const Spacing = {
  xs: 4,                    // Minimal spacing
  sm: 8,                    // Small spacing
  md: 16,                   // Medium spacing (base unit)
  lg: 24,                   // Large spacing
  xl: 32,                   // Extra large spacing
  '2xl': 48,                // Section spacing
  '3xl': 64,                // Major section spacing
  '4xl': 96,                // Page-level spacing
};

/**
 * Border Radius
 * Consistent corner rounding for UI elements.
 */
export const BorderRadius = {
  none: 0,
  sm: 4,                    // Small elements, tags
  md: 8,                    // Buttons, inputs, cards
  lg: 12,                   // Large cards, modals
  xl: 16,                   // Extra large containers
  full: 9999,               // Circular elements, pills
};

/**
 * Shadows
 * Elevation system for creating depth and hierarchy.
 */
export const Shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 16,
  },
};

/**
 * Z-Index Layers
 * Stacking order for overlays, modals, and floating elements.
 */
export const ZIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500,
  tooltip: 1600,
};

/**
 * Animation Durations
 * Consistent timing for transitions and animations.
 */
export const Animation = {
  duration: {
    fast: 150,              // Quick transitions
    normal: 250,            // Standard transitions
    slow: 350,              // Slower, emphasized transitions
  },
  easing: {
    default: 'ease-in-out',
    in: 'ease-in',
    out: 'ease-out',
  },
};

/**
 * Breakpoints
 * Responsive design breakpoints (not typically used in React Native, but included for web compatibility).
 */
export const Breakpoints = {
  xs: 320,                  // Small phones
  sm: 375,                  // Standard phones
  md: 768,                  // Tablets
  lg: 1024,                 // Large tablets, small desktops
  xl: 1280,                 // Desktops
};

/**
 * Component Specific Styles
 * Reusable style configurations for common component patterns.
 */
export const ComponentStyles = {
  // Button configurations
  button: {
    height: {
      sm: 32,
      md: 44,
      lg: 56,
    },
    minWidth: {
      sm: 64,
      md: 88,
      lg: 120,
    },
  },

  // Input configurations
  input: {
    height: {
      sm: 32,
      md: 44,
      lg: 56,
    },
  },

  // Card configurations
  card: {
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
  },

  // Modal configurations
  modal: {
    maxWidth: 400,
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
  },
};

/**
 * Complete theme object
 * Exports all theme configurations in a single object for easy consumption.
 */
export const Theme = {
  colors: Colors,
  typography: Typography,
  spacing: Spacing,
  borderRadius: BorderRadius,
  shadows: Shadows,
  zIndex: ZIndex,
  animation: Animation,
  breakpoints: Breakpoints,
  components: ComponentStyles,
};

export default Theme;