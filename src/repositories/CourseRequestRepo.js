import Repository from "@/repositories/Repository"

const resource = "api/courses/requests"

export default {

    store: (token, data) => {
        let form = {
            course_id: data.courseId, 
            notes: data.notes, 
            lifespan: data.lifespan
        }
        let headers = {
            headers: {'Authorization': `Bearer ${token}`},
        }
        return Repository.post(resource, form, headers)
    }

}
