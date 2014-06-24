function read(query, user, request) {
    query.where({ completed: false });
    request.execute();

}