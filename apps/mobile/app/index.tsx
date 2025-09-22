import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from 'react-native';
import Logo from '@/components/logo';
import { BookOpen, Pencil, Newspaper, MessageSquare, PlayCircle, Bot, Search, Home, Layers, ListChecks, PlaySquare, Users, MoreHorizontal } from 'lucide-react-native';

export default function HomeScreen() {
    return (
        <View style={styles.root}>
            <View style={styles.appBar}>
                <Logo />
            </View>

            <ScrollView contentContainerStyle={styles.content}>

                <View style={styles.grid}>
                    <FeatureCard title="មេរៀន" Icon={BookOpen} />
                    <FeatureCard title="លំហាត់" Icon={Pencil} />
                    <FeatureCard title="អត្ថបទ" Icon={Newspaper} />
                    <FeatureCard title="វេទិកា" Icon={MessageSquare} />
                    <FeatureCard title="វីដេអូ" Icon={PlayCircle} />
                    <FeatureCard title="ដារ៉ា AI" Icon={Bot} />
                </View>

                {/* <View style={styles.searchSection}>
                    <Text style={styles.searchTitle}>ស្វែងរកទាំងអស់</Text>
                    <View style={styles.searchBar}>
                        <Search color="#6b7280" size={18} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="ស្វែងរកមេរៀន ប្រធានបទ វីដេអូ..."
                            placeholderTextColor="#9ca3af"
                        />
                    </View>
                </View>

                <View style={styles.recentSection}>
                    <Text style={styles.recentTitle}>បានមើលថ្មីៗ</Text>
                    <RecentItem name="ការណែនាំពីរូបវិទ្យា" Icon={BookOpen} />
                    <RecentItem name="ជីវវិទ្យាមូលដ្ឋាន" Icon={PlayCircle} />
                    <RecentItem name="លំហាត់បណ្តោះអាសន្នអាល់ជេប្រា" Icon={Pencil} />
                </View> */}
            </ScrollView>

            <Pressable style={styles.aiFab} accessibilityRole="button">
                <Bot color="#fff" size={26} />
            </Pressable>

            <View style={styles.bottomNav}>
                <NavItem active Icon={Home} />
                <NavItem Icon={Layers} />
                <NavItem Icon={ListChecks} />
                <NavItem Icon={PlaySquare} />
                <NavItem Icon={Users} />
                <NavItem Icon={MoreHorizontal} />
            </View>
        </View>
    );
}

function FeatureCard({ title, Icon }: { title: string; Icon: any }) {
    return (
        <Pressable style={styles.featureCard} android_ripple={{ color: 'rgba(99,102,241,0.12)', borderless: false }}>
            <View style={styles.featureIconBox}>
                <Icon color="#fff" size={26} />
            </View>
            <Text style={styles.featureTitle}>{title}</Text>
        </Pressable>
    );
}

function RecentItem({ name, Icon }: { name: string; Icon: any }) {
    return (
        <Pressable style={styles.recentItem} android_ripple={{ color: '#f3f4f6' }}>
            <View style={styles.recentIconBox}>
                <Icon color="#fff" size={18} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.recentName}>{name}</Text>
            </View>
        </Pressable>
    );
}

function NavItem({ Icon, active = false }: { Icon: any; active?: boolean }) {
    return (
        <Pressable style={[styles.navItem, active && styles.navItemActive]} android_ripple={{ color: '#eef2ff', borderless: true }}>
            <Icon color={active ? '#6366f1' : '#9ca3af'} size={22} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    appBar: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    content: {
        padding: 16,
        paddingBottom: 120,
    },
    welcome: {
        fontSize: 22,
        fontWeight: '600',
        color: '#111827',
        textAlign: 'center',
        marginBottom: 6,
    },
    welcomeSub: {
        fontSize: 14,
        color: '#6b7280',
        textAlign: 'center',
        marginBottom: 18,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
        marginBottom: 18,
    },
    featureCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 14,
        paddingVertical: 18,
        paddingHorizontal: 14,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'transparent',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
    featureIconBox: {
        width: 56,
        height: 56,
        backgroundColor: '#6366f1',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    featureTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 3,
    },
    featureSubtitle: {
        fontSize: 12,
        color: '#6b7280',
        textAlign: 'center',
    },
    searchSection: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 16,
    },
    searchTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        gap: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#111827',
        padding: 0,
    },
    recentSection: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
    recentTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 6,
    },
    recentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    recentIconBox: {
        width: 40,
        height: 40,
        backgroundColor: '#6366f1',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    recentName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 2,
    },
    aiFab: {
        position: 'absolute',
        bottom: 90,
        right: 20,
        width: 56,
        height: 56,
        backgroundColor: '#6366f1',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#6366f1',
        shadowOpacity: 0.3,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
        paddingTop: 6,
        paddingBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: -2 },
    },
    navItem: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 6,
        minWidth: 50,
        borderRadius: 10,
    },
    navItemActive: {
        backgroundColor: '#f5f7ff',
    },
    navLabel: {
        fontSize: 10,
        color: '#6b7280',
        fontWeight: '600',
        marginTop: 4,
    },
    navLabelActive: {
        color: '#6366f1',
    },
});
