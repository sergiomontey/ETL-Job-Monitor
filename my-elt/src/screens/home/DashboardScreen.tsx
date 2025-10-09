/**
 * File: src/screens/home/DashboardScreen.tsx
 * Author: Senior Software Development Team
 * Date: October 7, 2025
 * 
 * Description:
 * Main dashboard screen for LMS migration consultants to monitor ETL jobs and migration progress.
 * DEMO VERSION: Uses dummy data for demonstration purposes. Displays realistic interface
 * for showcasing ETL job monitoring capabilities to stakeholders and clients.
 * 
 * Design Patterns Used:
 * - Presentation Pattern: Pure UI component with mock data
 * - Component Composition: Modular UI elements
 * 
 * Design Principles:
 * - Single Responsibility: Handles only dashboard UI presentation
 * - Separation of Concerns: UI separate from data (prepared for real implementation)
 * - DRY: Reusable styling and component patterns
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

// Theme and styling
import { Colors, Spacing, Typography, BorderRadius, Shadows } from '../../styles/theme';

/**
 * Mock ETL Job Data for Demo
 * Represents realistic LMS migration jobs with various states
 */
const MOCK_JOBS = [
  {
    id: '1',
    clientName: 'Acme Corporation',
    platform: 'Docebo',
    status: 'transforming',
    progress: 67,
    phase: 'Data Transformation',
    recordsProcessed: 45230,
    totalRecords: 67500,
    startTime: '2025-10-07T09:30:00Z',
    estimatedCompletion: '45 minutes',
  },
  {
    id: '2',
    clientName: 'TechStart Inc',
    platform: 'Cornerstone',
    status: 'loading',
    progress: 89,
    phase: 'Data Loading',
    recordsProcessed: 123400,
    totalRecords: 138900,
    startTime: '2025-10-07T08:15:00Z',
    estimatedCompletion: '12 minutes',
  },
  {
    id: '3',
    clientName: 'Global Enterprises',
    platform: 'SAP SuccessFactors',
    status: 'completed',
    progress: 100,
    phase: 'Validation Complete',
    recordsProcessed: 89500,
    totalRecords: 89500,
    startTime: '2025-10-07T06:00:00Z',
    estimatedCompletion: 'Completed',
  },
  {
    id: '4',
    clientName: 'MediCare Solutions',
    platform: 'Docebo',
    status: 'failed',
    progress: 34,
    phase: 'Data Extraction',
    recordsProcessed: 12300,
    totalRecords: 36200,
    startTime: '2025-10-07T10:45:00Z',
    estimatedCompletion: 'Failed',
    errorMessage: 'API rate limit exceeded',
  },
  {
    id: '5',
    clientName: 'Finance Pro Ltd',
    platform: 'Moodle',
    status: 'pending',
    progress: 0,
    phase: 'Queued',
    recordsProcessed: 0,
    totalRecords: 52000,
    startTime: null,
    estimatedCompletion: 'Pending start',
  },
  {
    id: '6',
    clientName: 'EduTech Academy',
    platform: 'Canvas',
    status: 'extracting',
    progress: 23,
    phase: 'Data Extraction',
    recordsProcessed: 15600,
    totalRecords: 67800,
    startTime: '2025-10-07T11:20:00Z',
    estimatedCompletion: '2 hours',
  },
];

/**
 * Job filter type
 */
type JobFilter = 'all' | 'active' | 'completed' | 'failed' | 'pending';

/**
 * DashboardScreen Component
 * 
 * Main screen for monitoring ETL jobs - Demo version with mock data
 * 
 * @returns {JSX.Element} Dashboard screen component
 */
const DashboardScreen: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<JobFilter>('all');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  /**
   * Simulate refresh action for demo
   */
  const handleRefresh = (): void => {
    setRefreshing(true);
    // Simulate network delay
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  /**
   * Navigate to job detail (demo - just show alert)
   */
  const navigateToJobDetail = (jobId: string, clientName: string): void => {
    // In demo, just show which job was tapped
    alert(`Opening details for ${clientName} (Job ID: ${jobId})`);
  };

  /**
   * Calculate dashboard statistics
   */
  const stats = {
    totalJobs: MOCK_JOBS.length,
    activeJobs: MOCK_JOBS.filter(job => 
      ['extracting', 'transforming', 'loading', 'validating'].includes(job.status)
    ).length,
    completedJobs: MOCK_JOBS.filter(job => job.status === 'completed').length,
    failedJobs: MOCK_JOBS.filter(job => job.status === 'failed').length,
  };

  /**
   * Filter jobs based on selected filter
   */
  const getFilteredJobs = () => {
    switch (selectedFilter) {
      case 'active':
        return MOCK_JOBS.filter(job => 
          ['extracting', 'transforming', 'loading', 'validating'].includes(job.status)
        );
      case 'completed':
        return MOCK_JOBS.filter(job => job.status === 'completed');
      case 'failed':
        return MOCK_JOBS.filter(job => job.status === 'failed');
      case 'pending':
        return MOCK_JOBS.filter(job => job.status === 'pending');
      default:
        return MOCK_JOBS;
    }
  };

  /**
   * Get status color based on job status
   */
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'extracting':
        return Colors.etl.extracting;
      case 'transforming':
        return Colors.etl.transforming;
      case 'loading':
        return Colors.etl.loading;
      case 'validating':
        return Colors.etl.validating;
      case 'completed':
        return Colors.etl.completed;
      case 'failed':
        return Colors.etl.failed;
      case 'pending':
        return Colors.etl.paused;
      default:
        return Colors.neutral.gray400;
    }
  };

  /**
   * Get status label
   */
  const getStatusLabel = (status: string): string => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  /**
   * Render statistics cards
   */
  const renderStatistics = (): JSX.Element => {
    return (
      <View style={styles.statsContainer}>
        <StatCard label="Total Jobs" value={stats.totalJobs} color={Colors.primary.main} />
        <StatCard label="Active" value={stats.activeJobs} color={Colors.status.warning} />
        <StatCard label="Completed" value={stats.completedJobs} color={Colors.status.success} />
        <StatCard label="Failed" value={stats.failedJobs} color={Colors.status.error} />
      </View>
    );
  };

  /**
   * Render filter buttons
   */
  const renderFilters = (): JSX.Element => {
    const filters: { key: JobFilter; label: string }[] = [
      { key: 'all', label: 'All' },
      { key: 'active', label: 'Active' },
      { key: 'completed', label: 'Completed' },
      { key: 'failed', label: 'Failed' },
      { key: 'pending', label: 'Pending' },
    ];

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
        contentContainerStyle={styles.filtersContent}
      >
        {filters.map(filter => (
          <TouchableOpacity
            key={filter.key}
            style={[
              styles.filterButton,
              selectedFilter === filter.key && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedFilter(filter.key)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedFilter === filter.key && styles.filterButtonTextActive,
              ]}
            >
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  /**
   * Render individual job card
   */
  const renderJobCard = ({ item }: { item: typeof MOCK_JOBS[0] }): JSX.Element => {
    const statusColor = getStatusColor(item.status);

    return (
      <TouchableOpacity
        style={styles.jobCard}
        onPress={() => navigateToJobDetail(item.id, item.clientName)}
        activeOpacity={0.7}
      >
        {/* Header */}
        <View style={styles.jobCardHeader}>
          <View style={styles.jobCardHeaderLeft}>
            <Text style={styles.jobCardClient}>{item.clientName}</Text>
            <Text style={styles.jobCardPlatform}>{item.platform}</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: statusColor + '20' }]}>
            <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
            <Text style={[styles.statusText, { color: statusColor }]}>
              {getStatusLabel(item.status)}
            </Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.phaseText}>{item.phase}</Text>
            <Text style={styles.progressPercentage}>{item.progress}%</Text>
          </View>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                {
                  width: `${item.progress}%`,
                  backgroundColor: statusColor,
                },
              ]}
            />
          </View>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Processed</Text>
            <Text style={styles.statValue}>
              {item.recordsProcessed.toLocaleString()} / {item.totalRecords.toLocaleString()}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Est. Time</Text>
            <Text style={styles.statValue}>{item.estimatedCompletion}</Text>
          </View>
        </View>

        {/* Error message if failed */}
        {item.status === 'failed' && item.errorMessage && (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>⚠️ {item.errorMessage}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const filteredJobs = getFilteredJobs();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>ETL Dashboard</Text>
          <Text style={styles.headerSubtitle}>Migration Monitoring</Text>
        </View>
        <View style={styles.connectionIndicator}>
          <View style={styles.connectionDot} />
          <Text style={styles.connectionText}>Live</Text>
        </View>
      </View>

      {/* Statistics */}
      {renderStatistics()}

      {/* Filters */}
      {renderFilters()}

      {/* Jobs List */}
      <FlatList
        data={filteredJobs}
        renderItem={renderJobCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No jobs found</Text>
            <Text style={styles.emptyStateSubtext}>
              No {selectedFilter === 'all' ? '' : selectedFilter} jobs at the moment
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

/**
 * StatCard Component - Displays a single statistic
 */
interface StatCardProps {
  label: string;
  value: number;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, color }) => {
  return (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
      <Text style={styles.statCardValue}>{value}</Text>
      <Text style={styles.statCardLabel}>{label}</Text>
    </View>
  );
};

/**
 * Styles for DashboardScreen
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  headerTitle: {
    fontSize: Typography.fontSize['2xl'],
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text.primary,
  },
  headerSubtitle: {
    fontSize: Typography.fontSize.sm,
    color: Colors.text.secondary,
    marginTop: 2,
  },

  // Connection indicator
  connectionIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 6,
    backgroundColor: Colors.status.successLight,
    borderRadius: BorderRadius.full,
  },
  connectionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.status.success,
    marginRight: 6,
  },
  connectionText: {
    fontSize: Typography.fontSize.xs,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.status.success,
  },

  // Statistics
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.lg,
    gap: Spacing.sm,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderLeftWidth: 4,
    ...Shadows.sm,
  },
  statCardValue: {
    fontSize: Typography.fontSize['3xl'],
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text.primary,
  },
  statCardLabel: {
    fontSize: Typography.fontSize.xs,
    color: Colors.text.secondary,
    marginTop: Spacing.xs,
    textTransform: 'uppercase',
  },

  // Filters
  filtersContainer: {
    marginBottom: Spacing.md,
  },
  filtersContent: {
    paddingHorizontal: Spacing.md,
    gap: Spacing.sm,
  },
  filterButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.background.secondary,
    borderWidth: 1,
    borderColor: Colors.border.light,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary.main,
    borderColor: Colors.primary.main,
  },
  filterButtonText: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.text.secondary,
  },
  filterButtonTextActive: {
    color: Colors.primary.contrast,
  },

  // Job Cards
  listContent: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  jobCard: {
    backgroundColor: Colors.background.secondary,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border.light,
    ...Shadows.sm,
  },
  jobCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  jobCardHeaderLeft: {
    flex: 1,
  },
  jobCardClient: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  jobCardPlatform: {
    fontSize: Typography.fontSize.sm,
    color: Colors.text.secondary,
  },

  // Status Badge
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: Typography.fontSize.xs,
    fontWeight: Typography.fontWeight.semibold,
  },

  // Progress Section
  progressSection: {
    marginBottom: Spacing.md,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  phaseText: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.text.primary,
  },
  progressPercentage: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text.primary,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: Colors.neutral.gray200,
    borderRadius: BorderRadius.sm,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: BorderRadius.sm,
  },

  // Stats Row
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: Typography.fontSize.xs,
    color: Colors.text.secondary,
    marginBottom: 4,
  },
  statValue: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text.primary,
  },

  // Error Banner
  errorBanner: {
    marginTop: Spacing.sm,
    padding: Spacing.sm,
    backgroundColor: Colors.status.errorLight,
    borderRadius: BorderRadius.sm,
    borderLeftWidth: 3,
    borderLeftColor: Colors.status.error,
  },
  errorText: {
    fontSize: Typography.fontSize.xs,
    color: Colors.status.error,
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing['3xl'],
  },
  emptyStateText: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  emptyStateSubtext: {
    fontSize: Typography.fontSize.sm,
    color: Colors.text.secondary,
  },
});

export default DashboardScreen;