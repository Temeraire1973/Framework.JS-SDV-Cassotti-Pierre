const { connectedUser } = useProfileStore();

export function useViewedProfile(profileId) {
    const viewedProfile = ref('test');

    const fetchViewedProfile = () => {
        
        viewedProfile.value = profileId;
    };

    return {
        viewedProfile,
        fetchViewedProfile
    };
}