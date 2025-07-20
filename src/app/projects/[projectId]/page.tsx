import { ProjectView } from "@/modules/projects/ui/views/project-view";

interface Props {
    params: Promise<{
        projectId: string;
    }>
}

const Page = async ({ params } : Props) => {
    const {projectId} = await params;
    return (
        <ProjectView projectId={projectId}/>
    )
}

export default Page; 